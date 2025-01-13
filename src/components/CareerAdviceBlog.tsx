import React from "react";
import { Stack, Box, Typography, styled, Grid } from "@mui/material";
import { IBlog } from "@/types/IBlog";

interface Props {
  blogs: Array<IBlog>;
}

const Image = styled("img")({
  objectFit: "cover",
  width: "165px",
  height: "95px",
});

const CareerAdviceBlog = ({ blogs = [] }: Props) => {
  return (
    <Box my={4}>
      <Typography variant="body2">Career Advice</Typography>

      <Grid container spacing={2} mt={2}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={6} key={`similar-advice-${blog.uuid}`}>
            <Stack
              direction="row"
              component={"a"}
              key={blog.uuid}
              href={blog.url}
              sx={{
                textDecoration: "none",
                mb: 1,
                borderRadius: "4px",
                border: "1px solid #DDDDDD",
              }}
            >
              <Box
                style={{
                  width: "max-content",
                  height: "100%",
                  display: "block",
                  minWidth: "165px",
                }}
              >
                <Image
                  src={
                    blog.feature_image ||
                    "/assets/img/brand/savanna-brand-logo.png"
                  }
                  alt={blog.title}
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </Box>

              <Typography
                sx={{
                  textDecoration: "none",
                  fontSize: {
                    xs: "18px",
                    sm: "18px",
                    md: "20px",
                  },
                  lineHeight: "32px",
                  fontFamily: "'Inter', sans-serif",
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {blog.title}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CareerAdviceBlog;
