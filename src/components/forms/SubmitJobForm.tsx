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

import APIService from "@/services/api-service";
import SelectInput from "./components/SelectInput";
import { LargeButton } from "../LargeButton";

const services = [
  {
    label: "Recruitment Service",
    value: "Recruitment Service",
  },
  {
    label: "Technology Hiring",
    value: "Technology Hiring",
  },
  {
    label: "Executive Search",
    value: "Executive Search",
  },
  {
    label: "Job Advertisement",
    value: "Job Advertisement",
  },
];

const IndustryOptions = [
  {
    label: "Banking / Financial Services / Broking /Asset Management",
    value: "Banking / Financial Services / Broking /Asset Management",
  },
  {
    label: "BPO / ITES",
    value: "BPO / ITES",
  },
  {
    label: "Education / Teaching / Training",
    value: "Education / Teaching / Training",
  },
  {
    label: "FMCG / Foods / Beverage",
    value: "FMCG / Foods / Beverage",
  },
  {
    label: "Insurance",
    value: "Insurance",
  },
  {
    label: "Legal",
    value: "Legal",
  },
  {
    label: "Recruitment/ HR services",
    value: "Recruitment/ HR services",
  },
];

const CustomTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    fontSize: "1rem",
  },
  "& .MuiInputLabel-root": {
    fontSize: "1rem",
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: "0.5rem",
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

export default ({ onSubmit }: any) => {
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
        company: "",
        designation: "",
        industry: "",
        service: "",
        jd: "",
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        const {
          name = "",
          email = "",
          mobile = "",
          designation = "",
          service = "",
          industry = "",
          company = "",
          jd = null,
        } = values;
        const formData: any = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", mobile);
        formData.append("designation", designation);
        formData.append("service", service);
        formData.append("industry", industry);
        formData.append("company", company);
        if (jd) {
          formData.append("resume", jd);
        } else {
          const emptyBlob = new Blob([""], { type: "text/plain" });
          const emptyFile = new File([emptyBlob], "empty.txt");
          formData.append("resume", emptyFile);
        }

        APIService.submitJob(formData)
          .then(() => {
            setFormStatus({
              message:
                "Your query submitted successfully!. We'll connect with you shortly!",
              type: "success",
            });
            resetForm();
          })
          .catch((error) => {
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
      }}
      validate={(values) => {
        const errors: any = {};
        if (!values.name) {
          errors.name = "Please complete required field!";
        }
        if (!NAME_REGEX.test(values.name)) {
          errors.name = "Please enter a valid name!";
        }
        if (!values.email) {
          errors.email = "Please complete required field!";
        }
        if (!EMAIL_REGEX.test(values.email)) {
          errors.email = "Please enter a valid email!";
        }
        if (values.mobile && !MOBILE_REGEX.test(values.mobile)) {
          errors.mobile = "Please enter a valid 10 digit phone number!";
        }
        if (!values.company) {
          errors.company = "Please complete required field!";
        }
        if (!NAME_REGEX.test(values.company)) {
          errors.company = "Please enter a valid company name!";
        }
        if (!values.industry) {
          errors.industry = "Please complete required field!";
        }
        if (!values.service) {
          errors.service = "Please complete required field!";
        }
        // if (!values.jd) {
        //   errors.jd = "Job description or role details is required!";
        // }

        //@ts-ignore
        if (values.jd && !allowedFormats.includes(values.jd.type)) {
          errors.jd =
            "Job description or role details should be a valid doc. docx and pdf !";
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
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            helperText={touched.name && errors.name}
            error={touched.name && Boolean(errors.name)}
          />
          <CustomTextField
            label="Business Email"
            name="email"
            value={values.email}
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
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            helperText={touched.mobile && errors.mobile}
            error={touched.mobile && Boolean(errors.mobile)}
          />
          <CustomTextField
            label="Company Name"
            name="company"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.company}
            disabled={isSubmitting}
            helperText={touched.company && errors.company}
            error={touched.company && Boolean(errors.company)}
          />
          <CustomTextField
            label="Designation"
            name="designation"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.designation}
            disabled={isSubmitting}
          />
          <SelectInput
            name="industry"
            label="Industry"
            items={IndustryOptions}
            onChange={handleChange}
            helperText={touched.industry && errors.industry}
            error={touched.industry && Boolean(errors.industry)}
            value={values.industry}
          />

          <SelectInput
            name="service"
            label="Service in"
            items={services}
            onChange={handleChange}
            helperText={touched.service && errors.service}
            error={touched.service && Boolean(errors.service)}
            value={values.service}
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
              sx={{
                textTransform: "none",
              }}
            >
              {/* @ts-ignore */}
              {values.jd.name || `Upoad Job Description/Role details`}
            </Button>
            {Boolean(errors.jd) && touched.jd && (
              <FormHelperText error={Boolean(errors.jd)}>
                {errors.jd}
              </FormHelperText>
            )}
          </label>
          <Input
            type="file"
            fullWidth
            name="file"
            disabled={isSubmitting}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFieldValue("jd", e.currentTarget.files?.[0]);
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
