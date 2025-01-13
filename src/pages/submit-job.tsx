import React from "react";
import { Typography, Container, Grid } from "@mui/material";

import Layout from "@/components/Layout";
import { PageBanner } from "@/components/site";
import SubmitJobForm from "@/components/forms/SubmitJobForm";

export default () => {
  return (
    <Layout>
      <PageBanner minHeight="130px">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" mb={2}>
              are you hiring?
            </Typography>
            <Typography variant="body2">
              If you're an employer and would like to discuss your hiring <br />{" "}
              needs, fill in the form below and we will call you back.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent={"flex-end"}
            alignItems={"center"}
          ></Grid>
        </Grid>
      </PageBanner>

      <Container
        maxWidth="xl"
        sx={{ marginTop: 2, marginBottom: "7.5em" }}
        id="#job-form"
      >
        <Grid container mt={3} spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "21px",
                color: "#091188",
                fontWeight: "600",
                mb: 2,
              }}
            >
              {" "}
              I'm an employer looking to hire!
            </Typography>
            <Typography variant="body2" textAlign="justify">
              Submit your requirements! Please feel free to fill in your details
              and submit all required details. We will process you requirments
              and revert to you shortly
              <br />
              <br />
              Thank you once again for choosing Savanna HR as your career
              partner. We wish you the very best in your career.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <SubmitJobForm />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
