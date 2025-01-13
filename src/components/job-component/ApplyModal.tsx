import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Typography,
  Divider,
  styled,
  Button,
  Input,
  FormHelperText,
  Stack,
  IconButton,
} from "@mui/material";
import { Formik } from "formik";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 0,
  py: 4,
  outline: "none",
};

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

const ApplyModal = ({ onSubmit, openForm, onClose, title }: any) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openForm);
  }, [openForm]);
  return (
    <Modal open={open} sx={{ outline: "none" }}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
          cv: "",
        }}
        onSubmit={onSubmit}
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
            errors.mobile = "Please enter a valid mobile!";
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
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <Box
            sx={style}
            component={"form"}
            gap={2}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            onSubmit={handleSubmit}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              width="100%"
              paddingLeft={7}
              paddingRight={2}
            >
              <Typography variant="body2" fontWeight="bold">
                {`Apply to ${title}`}
                <br />
                <Typography
                  variant="caption"
                  color={"primary"}
                  component={"a"}
                  href="#"
                >
                  Powered by HireXL ATS
                </Typography>
              </Typography>
              <IconButton color="error" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Divider sx={{ mb: 2 }} flexItem />
            <Box
              gap={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              px={7}
              width={"100%"}
            >
              <CustomTextField
                size="small"
                label="Name"
                value={values.name}
                fullWidth
                disabled={isSubmitting}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name && errors.name}
                error={touched.name && Boolean(errors.name)}
              />
              <CustomTextField
                size="small"
                label="Email"
                value={values.email}
                fullWidth
                name="email"
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <CustomTextField
                size="small"
                label="Phone"
                fullWidth
                name="mobile"
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                helperText={touched.mobile && errors.mobile}
                error={touched.mobile && Boolean(errors.mobile)}
              />
              <label htmlFor="file-upload">
                <Button
                  variant="outlined"
                  color="primary"
                  component="span"
                  fullWidth
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
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Modal>
  );
};

export default ApplyModal;
