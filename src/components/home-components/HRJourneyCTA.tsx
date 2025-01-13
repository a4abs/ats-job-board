import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const CustomLink = styled(Button)({
  fontFamily: "'Inter', sans-serif",
  fontSize: "36px",
  lineHeight: "55px",
  fontWeight: "400",
  color: "#000000",
  marginBottom: "15px",
  border: "2px solid #F5F5F5",
  borderBottom: "2px solid #FFFFFF",
  width: "max-content",
  textTransform: "none",
  "&:hover": {
    border: "2px solid rgba(89, 157, 21, 0.04)",
  },
});

const HRJourneyCTA = () => {
  return (
    <Box bgcolor={"#F5F5F5"}>
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Container
          maxWidth="xl"
          sx={{
            paddingX: {
              sm: 2,
              md: "0 !important",
            },
          }}
        >
          <Grid container pb={"160px"} pt={"100px"}>
            <Grid item xs={12} md={4} pb={4}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Merriweather', sans-serif",
                  fontSize: "48px",
                  lineHeight: "50px",
                  fontWeight: "400",
                  paddingX: 1,
                }}
              >
                <Typography
                  component={"span"}
                  variant="h2"
                  sx={{
                    backgroundColor: "#FF6F61",
                    fontFamily: "'Merriweather', sans-serif",
                    fontSize: "48px",
                    lineHeight: "65px",
                    fontWeight: "300",
                    paddingX: 1,
                    color: "#FFFFFF",
                  }}
                >
                  Start
                </Typography>{" "}
                With <br /> SavannaHR
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection={"column"}
            >
              <CustomLink
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "36px",
                  },
                }}
                href="/hiring-solutions"
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "55px",
                    fontWeight: "400",
                    color: "#000000",
                    fontSize: {
                      xs: "26px",
                      sm: "30px",
                      md: "36px",
                    },
                  }}
                >
                  All Hiring Solutions
                </Typography>
              </CustomLink>
              <CustomLink
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "36px",
                  },
                }}
                href="/submit-job"
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "55px",
                    fontWeight: "400",
                    color: "#000000",
                    fontSize: {
                      xs: "26px",
                      sm: "30px",
                      md: "36px",
                    },
                  }}
                >
                  Submit Job description
                </Typography>
              </CustomLink>
              <CustomLink
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "36px",
                  },
                }}
                href="/contact"
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "55px",
                    fontWeight: "400",
                    color: "#000000",
                    fontSize: {
                      xs: "26px",
                      sm: "30px",
                      md: "36px",
                    },
                  }}
                >
                  Request a callback
                </Typography>
              </CustomLink>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection={"column"}
            >
              <CustomLink
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "36px",
                  },
                }}
                href="/jobs"
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "55px",
                    fontWeight: "400",
                    color: "#000000",
                    fontSize: {
                      xs: "26px",
                      sm: "30px",
                      md: "36px",
                    },
                  }}
                >
                  View all Job openings
                </Typography>
              </CustomLink>
              <CustomLink
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "36px",
                  },
                }}
                href="submit-cv"
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "55px",
                    fontWeight: "400",
                    color: "#000000",
                    fontSize: {
                      xs: "26px",
                      sm: "30px",
                      md: "36px",
                    },
                  }}
                >
                  Submit your resume
                </Typography>
              </CustomLink>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </Box>
  );
};

export default HRJourneyCTA;
