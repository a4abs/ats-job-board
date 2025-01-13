import React, { useRef } from "react";
import {
  Grid,
  Container,
  Stack,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
};

const data = [
  {
    imgUrl: "/assets/img/peoples/tanvi-jain.png",
    name: "Tanvi Jain",
    designation: "HR, Pearson Education",
    message:
      "Savanna HR have always shown sincere interest in the deliverables for skills across levels. Their participation in requirement understanding commendable. I have always relied on for their round the clock availability",
  },
  {
    imgUrl: "/assets/img/peoples/sarika.jpeg",
    name: "Sarika Sharma",
    designation: "Senior Manager - Talent Aquisition LEAD School",
    message:
      "Swati and her team are very professional and are talent specialists. They have helped us fill critical positions on time. I highly recommend their services and wish them luck",
  },
  {
    imgUrl: "/assets/img/peoples/anusput-nayak.jpeg",
    name: "Anustup Nayak",
    designation: "VP, XSEED Education",
    message:
      "I have worked very closely with the Savanna HR team and they have helped us to close many niche hires. I find the team committed to quality service delivery and open to feedback",
  },
  {
    imgUrl: "/assets/img/peoples/abhinav-sehgal.jpg",
    name: "Abhinav Sehgal",
    designation: "Group Head HR, AAFT",
    message:
      "For top-notch recruitment services, Savanna HR is the way to go. They deliver spot-on solutions with a professional approach, and their knowledgeable team makes all the difference",
  },
];

const TestimonialItem = ({
  name = "",
  designation = "",
  message = "",
  imgUrl = "",
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(217,217,217,0.2)",
        mr: 3,
        p: 4,
        minHeight: "348px",
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        mb="40px"
      >
        <img
          src={imgUrl}
          loading="lazy"
          alt={name}
          style={{
            marginRight: "15px",
            width: "92px",
            height: "100px",
            objectFit: "cover",
          }}
        />
        <div>
          <Typography
            variant="body2"
            fontWeight="400"
            fontSize="18px"
            lineHeight="22px"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            fontWeight="400"
            fontSize="12px"
            lineHeight="15px"
          >
            {designation}
          </Typography>
        </div>
      </Box>
      <Typography
        variant="body2"
        fontWeight="400"
        fontSize="20px"
        lineHeight="24px"
      >
        {message}
      </Typography>
    </Box>
  );
};

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    //@ts-ignore
    sliderRef?.current?.slickNext();
  };

  const prevSlide = () => {
    //@ts-ignore
    sliderRef?.current?.slickPrev();
  };

  return (
    <Grid container justifyContent="center" mt="125px" mb={4} overflow="hidden">
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingLeft: "25px",
          paddingRight: "24px",
        }}
      >
        <div style={{ width: "50%" }}>
          <Typography variant="h2">Testimonials</Typography>
        </div>
        <Stack
          direction="row"
          gap={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            color="primary"
            sx={{ border: "1px solid #599D15" }}
            onClick={prevSlide}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            color="primary"
            sx={{ border: "1px solid #599D15" }}
            onClick={nextSlide}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          minHeight: "440px",
          overflowX: "visible",
          marginTop: 5,
          width: "100%",
          paddingLeft: "25px !important",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            position: "absolute",
            overflow: "hidden",
            maxWidth: "1400px !important",
            width: "1400px",
          }}
        >
          <div>
            <Slider {...settings} ref={sliderRef}>
              {data.map((testimonial, i) => (
                <div key={`testimonial-slide-item-${i}`}>
                  <TestimonialItem
                    name={testimonial.name}
                    designation={testimonial.designation}
                    imgUrl={testimonial.imgUrl}
                    message={testimonial.message}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
      </Container>
    </Grid>
  );
};

export default TestimonialSlider;
