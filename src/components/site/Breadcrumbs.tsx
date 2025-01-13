import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default ({ color = "#000000" }: { readonly color?: string }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  return (
    <Breadcrumbs
      separator="›"
      aria-label="breadcrumb"
      sx={{ padding: 0, background: "none", color }}
    >
      <Link underline="hover" key="1" color="inherit" href="/" fontSize={14}>
        Home
      </Link>
      {pathSegments.map((value, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        const label = isLast ? value.split("?")[0] : value;
        return isLast ? (
          <Link
            key="3"
            href="javascript:void(0)"
            color="inherit"
            fontSize={14}
            underline="none"
          >
            {label.replace(/[^a-zA-Z0-9 ]/g, " ") || ""}
          </Link>
        ) : (
          <Link
            underline="hover"
            key="2"
            color="inherit"
            fontSize={14}
            href={path}
          >
            <Typography
              variant="h1"
              fontSize={14}
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              {label}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
