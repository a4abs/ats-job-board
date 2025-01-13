import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

import Breadcrumbs from "./Breadcrumbs";

interface Props {
  children: ReactNode;
  breadcrumbTextColor?: string;
  bannerBackgroundImgUrl?: string;
  isBreadcrumb?: boolean;
  minHeight?: number | string;
}

const PageBanner = ({
  children,
  breadcrumbTextColor,
  bannerBackgroundImgUrl,
  isBreadcrumb = true,
  minHeight = "525px",
}: Props) => {
  return (
    <Box
      bgcolor="#EBEBEB"
      minHeight={minHeight}
      py={9}
      sx={
        bannerBackgroundImgUrl
          ? {
              backgroundImage: `url('${bannerBackgroundImgUrl}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",

                zIndex: 1,
              },
              "& > *": {
                position: "relative",
                zIndex: 2,
              },
            }
          : {}
      }
    >
      <Container maxWidth="xl">
        {isBreadcrumb && <Breadcrumbs color={breadcrumbTextColor} />}
        {children}
      </Container>
    </Box>
  );
};

export default PageBanner;
