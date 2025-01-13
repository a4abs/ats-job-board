import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import JobCard from "./job-component/JobCard";

interface IJob {
  id: string | number;
  title: string;
  channel: {
    name: string;
  };
  functionalArea: {
    primary: string;
    secondary: string;
  };
  location: string;
  experience: {
    min: number;
    max: number;
  };
  salary: {
    min: number;
    max: number;
  };
  createdAt: string;
  description: string;
  isFeatured?: boolean;
}

interface Props {
  jobs: Array<any>;
}
const SimilerJobs = ({ jobs = [] }: Props) => {
  return (
    <Box my={4}>
      <Typography variant="body1" fontWeight="bold">
        Similer jobs
      </Typography>
      <Grid container spacing={2} mt={0.5}>
        {jobs.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <JobCard job={job} showDescription={false} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimilerJobs;
