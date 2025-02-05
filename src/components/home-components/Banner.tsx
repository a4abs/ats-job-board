import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { motion } from "framer-motion";

export default function Banner({
  height = 600,
}: {
  readonly height?: number | string;
}) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      alignItems="center"
      height={height}
      sx={{
        position: "relative",
        bgcolor: {
          xs: "rgba(0,51,153, 0.6)",
          sm: "#003399",
        },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6.5}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        ></Grid>
        <Grid item xs={12} md={5.5}>
          <Box height={height}>
            <Image
              src="/assets/img/savanna-ceo.jpeg"
              alt="Savanna HR Team"
              loading="lazy"
              width={600}
              height={400}
              className="home-banner"
            />
          </Box>
        </Grid>
      </Grid>
      <Container
        maxWidth="xl"
        className="banner-small-bg"
        sx={{
          position: "absolute",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            height={height}
          >
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "48px",
                    color: "#FFFFFF",
                    mb: 3,
                  }}
                  className="JetBrains Mono"
                >
                  The Leadership Hiring <br />
                  Specialists
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "300",
                    color: "#FFFFFF",
                    marginTop: 1,
                    mb: 3,
                    fontFamily: "JetBrains Mono, sans-serif",
                  }}
                >
                  We work with the big guns and upstarts to match <br />
                  the right talent to the right role.
                </Typography>
              </motion.div>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={2}
                mt={"50px"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "#FFFFFF",
                      textTransform: "none",
                      border: "1px solid #FFFFFF",
                      "&:hover": {
                        color: "#FFFFFF",
                      },
                    }}
                    href="/contact"
                  >
                    Hire top talent
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Button
                    href="/jobs"
                    size="large"
                    sx={{
                      textTransform: "none",
                      textDecoration: "none",

                      color: "#FFFFFF",
                      "&:hover": {
                        backgroundColor: "inherit",
                        textDecoration: "underline",
                      },
                      "& .MuiButton-endIcon": {
                        marginLeft: "-4px",
                      },
                    }}
                    endIcon={<ArrowRightIcon fontSize="inherit" />}
                  >
                    Explore jobs
                  </Button>
                </motion.div>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <a className="scroll-mouse" href="#service">
        <Typography variant="caption" color="#FFFFFF" textTransform="none">
          SCROLL DOWN
        </Typography>
        <Image
          src="/assets/img/mouse.png"
          width={60}
          height={80}
          alt="scroll-down"
        />
      </a>
    </Box>
  );
}
