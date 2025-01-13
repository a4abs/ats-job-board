import React from "react";
import { Skeleton, Box } from "@mui/material";

const ListSkeleton = () => {
  return (
    <Box width="100%">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ mb: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ mb: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ mb: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ mb: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ mb: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ mb: 2 }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ mb: 2 }}
      />
    </Box>
  );
};

export default ListSkeleton;
