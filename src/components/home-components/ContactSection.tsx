import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  styled,
  Select,
  FormControl,
  MenuItem,
  Alert,
  Snackbar,
} from "@mui/material";
import { Formik } from "formik";

import APIService from "@/services/api-service";
import { LargeButton } from "../LargeButton";

const NAME_REGEX = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MOBILE_REGEX = /^\+?\d{1,4}[-.\s]?\d{9,15}$/;

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: "16px",
    paddingY: 2,
  },
  "& .MuiInputLabel-root": {
    fontSize: "16px",
  },
});

const formCallbackRequestType: any = {
  "1": "Recruiting and hiring at my company",
  "2": "Finding a new job or career",
};

const ContactSection = ({ bgcolor = "#ECFDF5" }) => {
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
    <Box
      bgcolor={bgcolor}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="xl">
        <Grid container py={12}>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              gap={3}
              width="80%"
              justifyItems="flex-start"
            >
              <Typography variant="h2">
                Contact{" "}
                <Typography
                  component={"span"}
                  sx={{
                    backgroundColor: "#FF6F61",
                    fontFamily: "'Merriweather', sans-serif",
                    fontSize: "40px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    paddingX: 1,
                    color: "#FFFFFF",
                  }}
                >
                  Us
                </Typography>
              </Typography>
              <Typography variant="body2">
                We match right people with right job for their mutual growth,
                progress and success. Right people at right job unlocks
                potential for both candidate and the organisation.
              </Typography>
              <Typography variant="body2">
                It’s a win-win. Get in touch for hiring. Job seekers submit your
                CV.
              </Typography>
              <Stack justifyItems="flex-start">
                <div
                  className="review-widget_net"
                  style={{ width: "max-content" }}
                  data-uuid="9cb716cd-88e7-4d40-929b-bb4d5e4248f3"
                  data-template="10"
                  data-lang="en"
                  data-theme="light"
                ></div>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Formik
              initialValues={{
                type: 1,
                firstName: "",
                lastName: "",
                companyEmail: "",
                phone: "",
              }}
              onSubmit={(values, { resetForm }) => {
                const {
                  firstName = "",
                  lastName = "",
                  companyEmail = "",
                  phone = "",
                  type = "1",
                } = values;
                APIService.sendRequestCallback({
                  name: `${firstName} ${lastName}`,
                  email: companyEmail,
                  phone,
                  type: formCallbackRequestType[type.toString()],
                })
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
                  });
              }}
              validate={(values) => {
                const errors: any = {};
                if (!values.type) {
                  errors.type = "Please select query type!";
                }
                if (!values.firstName) {
                  errors.firstName = "First name is required!";
                }
                if (!NAME_REGEX.test(values.firstName)) {
                  errors.firstName = "First name should have characters!";
                }
                if (!values.lastName) {
                  errors.lastName = "Last name is required!";
                }
                if (!NAME_REGEX.test(values.lastName)) {
                  errors.lastName = "Last name should have characters!";
                }
                if (!values.companyEmail) {
                  errors.companyEmail = "Emails is required!";
                }
                if (!EMAIL_REGEX.test(values.companyEmail)) {
                  errors.companyEmail = "Please enter a valid email address!";
                }
                if (values.phone && !MOBILE_REGEX.test(values.phone)) {
                  errors.phone = "Please enter a valid mobile number!";
                }
                return errors;
              }}
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                handleSubmit,
                handleBlur,
                handleChange,
              }) => (
                <Stack
                  direction="column"
                  gap={2.5}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  width="100%"
                  component="form"
                  onSubmit={handleSubmit}
                >
                  <Typography variant="h3">Request a callback</Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    width="100%"
                  >
                    <Typography variant="caption" fontWeight="bold" mb={1}>
                      How can we help?*
                    </Typography>
                    <FormControl fullWidth>
                      <Select
                        name="type"
                        value={values.type}
                        size="small"
                        onChange={handleChange}
                        inputProps={{
                          sx: {
                            fontSize: "16px",
                            paddingY: 0.6,
                          },
                        }}
                      >
                        <MenuItem value={1}>
                          Recruiting and hiring at my company
                        </MenuItem>
                        <MenuItem value={2}>
                          Finding a new job or career
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <CustomTextField
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="First name*"
                    size="small"
                    fullWidth
                    helperText={errors.firstName}
                    error={touched.firstName && Boolean(errors.firstName)}
                  />
                  <CustomTextField
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Last name*"
                    size="small"
                    fullWidth
                    helperText={errors.lastName}
                    error={touched.lastName && Boolean(errors.lastName)}
                  />
                  <CustomTextField
                    label="Company email*"
                    size="small"
                    name="companyEmail"
                    value={values.companyEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    helperText={errors.companyEmail}
                    error={touched.companyEmail && Boolean(errors.companyEmail)}
                  />
                  <CustomTextField
                    label="Phone"
                    size="small"
                    fullWidth
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.phone && errors.phone}
                    error={touched.phone && Boolean(errors.phone)}
                  />
                  <Box
                    width={"100%"}
                    display="flex"
                    justifyContent={"flex-end"}
                  >
                    <LargeButton
                      variant="contained"
                      type="submit"
                      size="large"
                      disabled={isSubmitting}
                    >
                      Submit
                    </LargeButton>
                  </Box>
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
                </Stack>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
