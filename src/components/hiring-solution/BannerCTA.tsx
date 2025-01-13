import React from "react";
import {
  Box,
  Container,
  Stack,
  Divider,
  Typography,
  styled,
} from "@mui/material";

const StatText = styled(Typography)({
  fontFamily: "'Merriweather', sans-serif",
  color: "#000000",
  fontWeight: "300",
  fontSize: "28px",
  lineHeight: "40px",
  textAlign: "center",
});

const BannerCTA = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      alignItems="center"
      height={100}
      bgcolor="#F5F5F5"
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-evenly"
          maxWidth={"700px"}
          margin={"0 auto"}
        >
          <StatText
            sx={{
              fontSize: {
                xs: "20px",
                md: "28px",
              },
            }}
          >
            Offerings
          </StatText>{" "}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#E5E5E5" }}
          />
          <StatText
            sx={{
              fontSize: {
                xs: "20px",
                md: "28px",
              },
            }}
          >
            Industries
          </StatText>{" "}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#E5E5E5" }}
          />
          <StatText
            sx={{
              fontSize: {
                xs: "20px",
                md: "28px",
              },
            }}
          >
            Articles
          </StatText>
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerCTA;
