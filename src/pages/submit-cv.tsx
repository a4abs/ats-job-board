import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";

import Layout from "@/components/Layout";
import { PageBanner } from "@/components/site";
import SubmitCVForm from "@/components/forms/SubmitCVForm";

export default () => {
  return (
    <Layout>
      <PageBanner minHeight="130px">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" mb={2}>
              Looking for a job?
            </Typography>
            <Typography variant="body2">
              Today's employees expect more from their employer. Work-life
              balance, social responsibility, equality for women and minorities,
              and technological innovation are just a few of the current issues
              organizations are facing.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Button variant="contained" size="large" href="/jobs">
              Find Jobs
            </Button>
          </Grid>
        </Grid>
      </PageBanner>

      <Container maxWidth="xl" sx={{ marginTop: 2, marginBottom: "7.5em" }}>
        <Grid container mt={3} spacing={3}>
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
              Easy Apply!
            </Typography>
            <Typography variant="body2">
              Submit your resume! Please feel free to fill in your details and
              submit your resume. If we find a match for your skills, we will
              get in touch with you.
              <br />
              <br />
              Thank you once again for choosing Savanna HR as your career
              partner. We wish you the very best in your career.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <SubmitCVForm />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
