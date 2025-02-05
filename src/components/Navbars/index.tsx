import React from "react";

import { Container, Box, Typography } from "@mui/material";

import ThemeBox from "@/components/ThemeBox";

function DefaultNavbar({ sticky }: any) {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container
        maxWidth="xl"
        sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : { p: 1 }}
      >
        <ThemeBox>
          <ThemeBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <ThemeBox>
              <a href="/">
                <Typography variant="h1" color="#1A3372" fontSize="2rem">
                  openjobs.dev
                </Typography>
                {/* <img
                  src="https://technocube.co/wp-content/uploads/2022/01/cropped-logo-new-2.png"
                  className="App-logo"
                  alt="Savanna HR Logo"
                /> */}
              </a>
            </ThemeBox>
          </ThemeBox>
        </ThemeBox>
      </Container>
    </Box>
  );
}

export default DefaultNavbar;
