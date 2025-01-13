import React from "react";
import { Box, Container, Grid, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box width="100%" bgcolor="#333333">
      <Container
        maxWidth="xl"
        className="padding-x-none"
        sx={{ padding: "3em 0px 15px", color: "#FFFFFF" }}
      >
        <Grid
          container
          sx={{
            paddingLeft: {
              xs: 2,
              md: 0,
            },
            paddingRight: {
              xs: 2,
              md: 0,
            },
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            width="100%"
            mb={2}
            flexWrap="wrap-reverse"
          >
            <Grid item xs={12} md={6} display="flex" gap="16px">
              <a href="#" target="_blank">
                <img src="/assets/img/fb.svg" alt="fb" />
              </a>
              <a href="#">
                <img src="/assets/img/insta.svg" alt="instagram" />
              </a>
              <a href="#" target="_blank">
                <img src="/assets/img/link.svg" alt="linkedin" />
              </a>
              <a href="#">
                <img src="/assets/img/twitter.svg" alt="twitter" />
              </a>
            </Grid>
          </Stack>

          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Typography
                sx={{ fontSize: "12px", padding: "1em 0px", color: "#FFFFFF" }}
              >
                Technocube @2012-2025 Technocube (India) All rights reserved
              </Typography>
              <Typography
                sx={{ fontSize: "12px", padding: "1em 0px", color: "#FFFFFF" }}
              >
                Designed & Developed by{" "}
                <Link href="https://technocube.co/" color="inherit">
                  {" "}
                  Technocube(India)
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
