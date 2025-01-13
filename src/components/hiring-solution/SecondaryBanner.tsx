import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import { PageBanner } from "../site";

interface SecondaryBannerProps {
  title?: string;
  description?: string;
}

const SecondaryBanner = ({
  title = "Hiring <br />Solutions",
  description = "At Savanna we Speak to you, Understand your expectations and Find your Perfect matching Teammate.",
}: SecondaryBannerProps) => {
  return (
    <PageBanner
      breadcrumbTextColor="#FFFFFF"
      bannerBackgroundImgUrl="/assets/img/team-group.png"
      isBreadcrumb
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "url('/assets/img/banner-graphics.png')",
              maxWidth: "436px",
              height: "298px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              padding: "2em 3em",
            }}
          >
            <Typography
              variant="h1"
              mb={1}
              color="#FFFFFF"
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "30px",
                  md: "48px",
                },
              }}
              fontSize="48px"
              fontWeight="300"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <Typography
              variant="body2"
              color="#FFFFFF"
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                },
                lineHeight: {
                  xs: "23px",
                  sm: "23px",
                  md: "26px",
                },
              }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="flex-end"
          alignItems="center"
        >
          <img
            src="/assets/img/brand/aniversary-logo.png"
            alt="Savanna HR Aniversary"
            style={{ aspectRatio: "1", width: 199 }}
          />
        </Grid>
      </Grid>
    </PageBanner>
  );
};

export default SecondaryBanner;
