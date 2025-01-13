import React from "react";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";

import { LargeButton } from "../LargeButton";

const FindJobBanner = () => {
  return (
    <Box
      bgcolor="#ECFDF5"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="xl">
        <Grid container py={12}>
          <Grid item xs={12} md={4}>
            <Stack
              direction="column"
              gap={3}
              width="80%"
              justifyItems="flex-start"
            >
              <Typography variant="h2">Looking for job?</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack
              direction="column"
              gap={3}
              width="80%"
              justifyItems="flex-start"
            >
              <Typography variant="body2">
                We match right people with right job for their mutual growth,
                progress and success. Right people at right job unlocks
                potential for both candidate and the organisation.
              </Typography>
              <Typography variant="body2">
                It’s a win-win. Get in touch for hiring. Job seekers submit your
                CV.
              </Typography>
              <Stack justifyItems="flex-start" alignItems="flex-start">
                <LargeButton
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/jobs"
                >
                  Find Jobs
                </LargeButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FindJobBanner;
