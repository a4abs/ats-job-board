import React from "react";
import { Box, Grid, Pagination, Container } from "@mui/material";

import JobCard from "./JobCard";
import JobSearchBar from "./JobSearchBar";
import JobFilter from "./JobFilter";
import ListSkeleton from "./ListSkeleton";
import { Breadcrumbs } from "../site";

interface Props {
  cities: Array<{ label: string; value: string }>;
  functionalAreaList: Array<{ label: string; value: string }>;
  jobs: {
    estimatedTotalHits: number;
    hits: Array<any>;
    limit: number;
  };
  onPageChange: (e: any, page: number) => void;
  onCheckFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchChange: (filters: any) => void;
  filters: any;
  loading: boolean;
  page?: number;
}

export default (props: Props) => {
  const { loading = false, page = 1, jobs } = props;

  return (
    <>
      <Box bgcolor={"#EBEBEB"} minHeight="30vh" py={6} mb={3}>
        <Container maxWidth="xl">
          <Breadcrumbs />
          <JobSearchBar
            locations={props.cities}
            onApplyFilter={props.onSearchChange}
            filters={props.filters}
          />
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ mb: "7.5em" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <JobFilter
              options={props.functionalAreaList}
              handleChange={props.onCheckFilter}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            {loading ? (
              <ListSkeleton />
            ) : (
              jobs?.hits?.map((job) => (
                <JobCard job={job} key={`job-${job.id}`} />
              ))
            )}
            <Pagination
              count={
                jobs.estimatedTotalHits
                  ? Math.ceil(jobs.estimatedTotalHits / 15)
                  : 0
              }
              page={page}
              disabled={loading}
              onChange={props.onPageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
