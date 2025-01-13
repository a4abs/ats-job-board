import React, { useState } from "react";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Box,
  TextField,
  Button,
  styled,
  FormHelperText,
  Input,
  Alert,
  Snackbar,
} from "@mui/material";
import { Formik } from "formik";

import { LargeButton } from "../LargeButton";
import APIService from "@/services/api-service";

const CustomTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    fontSize: "1rem",
  },
  "& .MuiInputLabel-root": {
    fontSize: "1rem",
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: "1rem",
  },
  "& .MuiFormHelperText-root": {
    paddingLeft: 0,
    marginLeft: 0,
  },
}));

const allowedFormats = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const NAME_REGEX =
  /^[A-Za-z]+([A-Za-z'\\-]*[A-Za-z]+)?(?: [A-Za-z]+([A-Za-z'\\-]*[A-Za-z]+)?)*$/;
const MOBILE_REGEX = /^\+?(\d{1,3})?[-.\s]?(\d{10})$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default () => {
  const [formError, setFormError] = useState<null | "success" | "error">(null);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error";
  }>({ message: "", type: "success" });

  const handleClose = () => {
    setFormStatus({
      message: "",
      type: "success",
    });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        mobile: "",
        expectedCTC: "",
        currentCTC: "",
        preferedLocation: "",
        cv: "",
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        const {
          name = "",
          email = "",
          mobile = "",
          expectedCTC = "",
          currentCTC = "",
          preferedLocation = "",
          cv = null,
        } = values;
        const formData: any = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", mobile);
        formData.append("expectedCTC", expectedCTC);
        formData.append("currentCTC", currentCTC);
        formData.append("location", preferedLocation);
        formData.append("resume", cv);
        APIService.submitCV(formData)
          .then(() => {
            setFormStatus({
              message:
                "Thank you for reaching out. We will review your request and get back to you shortly!",
              type: "success",
            });
            resetForm();
          })
          .catch((error) => {
            console.log(error);
            setFormStatus({
              message:
                "Oops! Something went wrong. Try again or call +91-9191198574.",
              type: "error",
            });
          })
          .finally(() => {
            setTimeout(() => {
              setFormStatus({
                message: "",
                type: "success",
              });
            }, 6000);
            setSubmitting(false);
          });

        const formData2: any = new FormData();
        formData2.append("name", name);
        formData2.append("email", email);
        formData2.append("mobile", mobile);
        formData2.append("resume", cv);

        APIService.submitCVToATS(formData2);
      }}
      validate={(values) => {
        const errors: any = {};
        if (!values.name) {
          errors.name = "Name is required!";
        }
        if (!NAME_REGEX.test(values.name)) {
          errors.name = "Name should be valid!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        }
        if (!EMAIL_REGEX.test(values.email)) {
          errors.email = "Please enter a valid email!";
        }
        if (values.mobile && !MOBILE_REGEX.test(values.mobile)) {
          errors.mobile = "Please enter a valid 10 digit phone number!";
        }
        if (!values.cv) {
          errors.cv = "Resume is required!";
        }

        //@ts-ignore
        if (!allowedFormats.includes(values.cv.type)) {
          errors.cv = "Resume should be a valid doc. docx and pdf !";
        }

        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          display={"flex"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          gap={2}
        >
          <CustomTextField
            label="Name"
            name="name"
            value={values.name}
            placeholder="Jhon Doe"
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.name && errors.name}
            error={touched.name && Boolean(errors.name)}
          />
          <CustomTextField
            label="Email"
            name="email"
            value={values.email}
            placeholder="jhon@mail.com"
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <CustomTextField
            label="Phone"
            name="mobile"
            value={values.mobile}
            placeholder="9876543210"
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            helperText={touched.mobile && errors.mobile}
            error={touched.mobile && Boolean(errors.mobile)}
          />
          <CustomTextField
            label="Expected CTC(INR)"
            name="expectedCTC"
            value={values.expectedCTC}
            placeholder="10 LPA"
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            helperText={touched.expectedCTC && errors.expectedCTC}
            error={touched.expectedCTC && Boolean(errors.expectedCTC)}
          />
          <CustomTextField
            label="Current CTC(INR)"
            name="currentCTC"
            value={values.currentCTC}
            placeholder="9 LPA"
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            helperText={touched.currentCTC && errors.currentCTC}
            error={touched.currentCTC && Boolean(errors.currentCTC)}
          />
          <CustomTextField
            label="Prefered Location"
            name="preferedLocation"
            value={values.preferedLocation}
            placeholder="Noida"
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
          <label htmlFor="file-upload">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              fullWidth
              size="large"
              disabled={isSubmitting}
              startIcon={<AttachFileIcon />}
            >
              {/* @ts-ignore */}
              {values.cv.name || `Choose Resume`}
            </Button>
            {Boolean(errors.cv) && touched.cv && (
              <FormHelperText error={Boolean(errors.cv)}>
                {errors.cv}
              </FormHelperText>
            )}
          </label>
          <Input
            type="file"
            fullWidth
            name="file"
            disabled={isSubmitting}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFieldValue("cv", e.currentTarget.files?.[0]);
            }}
            id="file-upload"
            sx={{ display: "none" }}
          />
          <LargeButton
            variant="contained"
            size="large"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </LargeButton>
          <Snackbar
            open={!!formStatus.message}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <Alert
              onClose={handleClose}
              severity={formStatus.type}
              variant="filled"
              sx={{ width: "100%", fontSize: "14px", color: "#FFFFFF" }}
            >
              {formStatus.message}
            </Alert>
          </Snackbar>
        </Box>
      )}
    </Formik>
  );
};
