import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import JobCard from "./job-component/JobCard";

interface Props {
  jobs: Array<any>;
}

const NextArrow = ({ onClick }: any) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        right: "1em",
        top: "30%",
        color: "#000000",
        zIndex: 999,
        border: "2px solid #FFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      onClick={onClick}
    >
      <ChevronRightRoundedIcon color="inherit" sx={{ fontSize: 35 }} />
    </IconButton>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        left: "1em",
        top: "30%",
        color: "#000000",
        zIndex: 999,
        border: "2px solid #FFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      onClick={onClick}
    >
      <ChevronLeftRoundedIcon color="inherit" sx={{ fontSize: 35 }} />
    </IconButton>
  );
};

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  autoplaySpeed: 0,
  pauseOnHover: true,
  rtl: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
  ],
};

const SimilarJobsSlider = ({ jobs = [] }: Props) => {
  return (
    <Box my={4}>
      <Typography variant="body2" mb={2}>
        Similer jobs
      </Typography>
      <Slider {...settings} className="similar-jobs-slick-slider">
        {jobs.map((job) => (
          <JobCard job={job} showDescription={false} key={job.id} />
        ))}
      </Slider>
    </Box>
  );
};

export default SimilarJobsSlider;
