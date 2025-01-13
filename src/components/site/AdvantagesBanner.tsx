import React from "react";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";

const AdvantagesBanner = () => {
  return (
    <Box
      bgcolor="#ECFDF5"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={"7.5em"}
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
              <Typography variant="h2">Savanna HR Advantage</Typography>
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
                There are significant advantages of working with Savanna HR. In
                the time of quick fixes and artificial Intelligence, our team at
                Savanna uses their Emotional intelligence together with
                head-hunting skills to find the perfect match between Jobseekers
                and employers.
              </Typography>
              <Typography variant="body2">
                We at Savanna are technologically self-dependent with our
                AI-enabled robust database and other in-house developed tools
                which work as a secret sauce in quality delivery. We feel proud
                to serve you well, with our
              </Typography>
              <Stack justifyItems="flex-start" alignItems="flex-start">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/advantages"
                >
                  SavannaHR Advantages
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvantagesBanner;
