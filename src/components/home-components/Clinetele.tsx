import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

import styles from "./client.module.css";

const settings = {
  infinite: true,
  speed: 9000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const settings1 = {
  infinite: true,
  speed: 9000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  rtl: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ClientSection = () => {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection={"column"}
      sx={{
        pt: {
          xs: "50px",
          sm: "80px",
          md: "100px",
        },
        pb: {
          xs: "75px",
          sm: "100px",
          md: "150px",
        },
      }}
      bgcolor="#FFFFFF"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          color="#000000"
          sx={{
            marginBottom: 5,
            fontSize: "36px",
            fontWeight: "300",
            fontFamily: "'JetBrains Mono', sans-serif",
          }}
        >
          Our Clientele
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Box
          display="flex"
          width="100%"
          pb={7}
          pt={7}
          borderBottom={"1px solid #000000"}
          borderTop={"1px solid #000000"}
          overflow={"hidden"}
        >
          <Slider {...settings} className={styles.slickWrapper}>
            <div className={styles.item}>
              <img src="/assets/img/clients/xseed.png" alt="Xseed" />
            </div>
            <div className={styles.item}>
              <img src="/assets/img/clients/britannica.png" alt="Britannica" />
            </div>
            <div className={styles.item}>
              <img src="/assets/img/clients/hdfc-ergo.png" alt="HDFC ERGO" />
            </div>
            <div className={styles.item}>
              <img src="/assets/img/clients/cuemath.png" alt="Cuemath" />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/people-combine.png"
                alt="People Combine"
              />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/internshala.png"
                alt="Internshala"
              />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/turtle-mint.png"
                alt="Turtle mint "
              />
            </div>
            <div className={styles.item}>
              <img src="/assets/img/clients/upgrad.png" alt="Upgrad" />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/shoolini-uni.png"
                alt="Shoolini University"
              />
            </div>
          </Slider>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box
          display="flex"
          width="100%"
          pb={7}
          pt={7}
          overflow={"hidden"}
          borderBottom={"1px solid #000000"}
        >
          <Slider {...settings1} className={styles.slickWrapper}>
            <div className={styles.item}>
              <img src="/assets/img/clients/rupifi.png" alt="RUPIFI" />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/future-genereli.png"
                alt="Future Generali"
              />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/applicate-ai.png"
                alt="Applicate AI"
              />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/appolo-munich.png"
                alt="Appllo-munic"
              />
            </div>

            <div className={styles.item}>
              <img src="/assets/img/clients/extramark.png" alt="Extramark" />
            </div>
            <div className={styles.item}>
              <img src="/assets/img/clients/pearson.png" alt="pearson" />
            </div>

            <div className={styles.item}>
              <img src="/assets/img/clients/s-chand.png" alt="S Chand" />
            </div>
            <div className={styles.item}>
              <img
                src="/assets/img/clients/splash-math.png"
                alt="Splash Match"
              />
            </div>
          </Slider>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ClientSection;
