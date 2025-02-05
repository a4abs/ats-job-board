import React from "react";
import {
  Box,
  Container,
  Grid,
  SxProps,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const ButtonWhite = styled(Button)({
  textTransform: "none",
  display: "none",
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderColor: "#FFFFFF",
  },
});

const overlayStyle: SxProps = {
  position: "absolute",
  background:
    "linear-gradient(-180deg,rgba(15,25,65,0) 33%,rgb(15,25,65) 100%)",
  width: "calc(100% - 24px)",
  height: "auto",
  bottom: 0,
  paddingX: 2,
  paddingY: 4,
  color: "#FFFFFF",
  borderRadius: "0px 0px 0.5em 0.5em",
  zIndex: 1,
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  cursor: "pointer",
};

const gridItemStyle: SxProps = {
  position: "relative",
  overflow: "hidden",
  "&:hover .overlay": {
    width: "calc(100% - 24px)",
    height: "100%",
    top: 0,
    right: 0,
    borderRadius: "0.5em",
  },
  "&:hover .hoverbtn": {
    display: "flex",
  },
  "&:hover .hoverBtnText": {
    transform: "translateY(-60px)",
  },
};

export default () => {
  return (
    <Box bgcolor={"#FFFFFF"}>
      <Container
        maxWidth="xl"
        id="service"
        sx={{
          paddingX: {
            sm: 2,
            md: "0px !important",
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} mb={"48px"}>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Typography
                variant="h2"
                color="primary"
                sx={{
                  color: "#000000",
                  fontFamily: "'JetBrains Mono', sans-serif",
                  fontSize: "40px",
                  lineHeight: "50px",
                  fontWeight: "400",
                  pb: 3,
                }}
              >
                Your{" "}
                <Typography
                  component={"span"}
                  sx={{
                    backgroundColor: "#FF6F61",
                    fontFamily: "'JetBrains Mono', sans-serif",
                    fontSize: "40px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    paddingX: 1,
                    color: "#FFFFFF",
                  }}
                >
                  personalised recruitment
                </Typography>{" "}
                partner
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Typography variant="body1">
                Savanna HR is a specialist in leadership hiring. We conduct
                focussed outreach, rigorous screening, and find talent fit for
                the job. We are tech enabled, data driven, skilled recruiters
                who take a proactive approach to close your position, and help
                candidate to find a right job
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sx={gridItemStyle}>
            <Image
              src="/assets/img/section-img-1.png"
              loading="lazy"
              width={400}
              height={450}
              alt="Savanna HR Team"
              style={{ borderRadius: "0.5em" }}
              className="services-image margin-top slide-to-top-0-2s"
            />
            <Box sx={overlayStyle} className="overlay">
              <Typography
                variant="body1"
                color="inherit"
                className="hoverBtnText"
                sx={{
                  transform: "translateX(0) translateY(0)",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              >
                For Clients
              </Typography>
              <ButtonWhite
                variant="outlined"
                size="large"
                className="hoverbtn"
                href="/hiring-solutions"
              >
                helping clients
              </ButtonWhite>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={gridItemStyle}>
            <Image
              src="/assets/img/section-img-2.png"
              loading="lazy"
              width={400}
              height={450}
              alt="Savanna HR Team"
              style={{ borderRadius: "0.5em" }}
              className="services-image margin-top slide-to-top-0-2s"
            />
            <Box sx={overlayStyle} className="overlay">
              <Typography
                color="inherit"
                variant="body1"
                className="hoverBtnText"
                sx={{
                  transform: "translateX(0) translateY(0)",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              >
                For job seekers
              </Typography>
              <ButtonWhite
                variant="outlined"
                size="large"
                className="hoverbtn"
                href="/jobs"
              >
                find job
              </ButtonWhite>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
