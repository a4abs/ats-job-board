import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Divider,
  Grid,
  Button,
  Snackbar,
  Alert,
  Skeleton,
  Container,
} from "@mui/material";
import { useRouter } from "next/router";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ReactHtmlParser from "react-html-parser";
//@ts-ignore
import textile from "textile-js";

import JobBoardAPI from "./api-service";
import ApplyModal from "./ApplyModal";
import { Breadcrumbs } from "../site";
import SimilarJobsSlider from "../SimilarJobsSlider";

dayjs.extend(relativeTime);

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
}

interface Props {
  job: IJob;
  similerJobs: Array<IJob>;
}

const JobDetails = ({ job, similerJobs }: Props) => {
  const router = useRouter();
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<{
    isOpen: boolean;
    status: "success" | "error";
    message: string;
  }>({
    isOpen: false,
    status: "success",
    message: "",
  });
  const pathArray = router.asPath.split("/");
  const lastSegment = pathArray[pathArray.length - 1];

  const handleSubmit = (
    { cv = null, name = "", email = "", mobile = "" },
    { setSubmitting, resetForm }: any
  ) => {
    JobBoardAPI.directApplyToJob({
      cv,
      job: `${job.id}`,
      name,
      email,
      mobile,
    })
      .then((res) => {
        setSubmitting(false);
        resetForm();
        setApplicationStatus({
          isOpen: true,
          status: "success",
          message: "Your application submitted successfully!",
        });
        setOpenApplyModal(false);
      })
      .catch((error: any) => {
        setSubmitting(false);
        console.log("error", error);
        setApplicationStatus({
          isOpen: true,
          status: "error",
          message: "Something went wrong!",
        });
      });
  };

  const handleModalClose = () => {
    setOpenApplyModal(false);
  };

  return (
    <Stack gap={2} direction="column">
      <Snackbar
        open={applicationStatus.isOpen}
        autoHideDuration={6000}
        onClose={() =>
          setApplicationStatus({
            isOpen: false,
            status: "success",
            message: "",
          })
        }
      >
        <Alert
          onClose={() =>
            setApplicationStatus({
              isOpen: false,
              status: "success",
              message: "",
            })
          }
          severity={applicationStatus.status}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {applicationStatus.message}
        </Alert>
      </Snackbar>
      <ApplyModal
        onSubmit={handleSubmit}
        title={job.title}
        openForm={openApplyModal}
        onClose={handleModalClose}
      />
      <Box bgcolor={"#EBEBEB"} minHeight="30vh" py={6} mb={3}>
        <Container maxWidth="xl">
          <Breadcrumbs />
          <Card variant="outlined">
            <CardContent>
              <Stack
                direction={"row"}
                gap={1}
                py={0.5}
                flexWrap="wrap"
                alignItems="center"
              >
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography
                    variant="h1"
                    fontWeight={"medium"}
                    fontSize="20px"
                    sx={{ fontFamily: "JetBrains Mono", color: "#000000" }}
                  >
                    {job.title}
                  </Typography>
                )}
                <Divider orientation="vertical" flexItem />
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography variant="body2">Savanna HR</Typography>
                )}
                <Divider orientation="vertical" flexItem />
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography variant="body2">
                    {job.functionalArea.secondary}
                  </Typography>
                )}
              </Stack>

              <Stack direction={"row"} gap={1} py={0.5} flexWrap="wrap">
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  gap={1}
                >
                  <BusinessCenterIcon sx={{ fontSize: 16 }} color="primary" />
                  {loading ? (
                    <Skeleton variant="text" />
                  ) : (
                    <Typography variant="body2">{`${job.experience.min}-${job.experience.max} Yrs`}</Typography>
                  )}
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  gap={1}
                >
                  <LocationOnIcon sx={{ fontSize: 18 }} color="primary" />
                  {loading ? (
                    <Skeleton variant="text" />
                  ) : (
                    <Typography variant="body2">{job.location}</Typography>
                  )}
                </Box>
              </Stack>

              <Divider sx={{ py: 1 }} />
              <Stack
                direction={"row"}
                gap={3}
                mt={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography variant="body2">
                    Posted: {dayjs(job.createdAt).fromNow()}
                  </Typography>
                )}
                {loading ? (
                  <Skeleton variant="rectangular" />
                ) : (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setOpenApplyModal(true)}
                    sx={{
                      backgroundColor: "#003399",
                      color: "#FFFFFF",
                      textTransform: "none",
                      border: "1px solid #003399",
                      "&:hover": {
                        border: "1px solid #003399",
                        backgroundColor: "#003399",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    Apply
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ minHeight: "90vh", paddingY: 2 }}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={0.5}>
              <Grid item xs={12}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontWeight: "bold",
                    fontSize: "20px",
                    lineHeight: "32px",
                  }}
                >
                  Description
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ fontFamily: '"JetBrains Mono",sans-serif' }}
              >
                {loading ? (
                  <Skeleton variant="rectangular" width={"100%"} height={100} />
                ) : (
                  <>{ReactHtmlParser(textile(job.description))}</>
                )}
              </Grid>
            </Grid>
            <Divider sx={{ py: 1 }} />
            <Stack
              direction={"row"}
              gap={3}
              mt={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={0.5}
              >
                <FacebookShareButton title={job.title} url="">
                  <FacebookIcon sx={{ fontSize: 18 }} htmlColor="#003399" />
                </FacebookShareButton>
                <LinkedinShareButton title={job.title} url="" source="">
                  <LinkedInIcon sx={{ fontSize: 18 }} htmlColor="#003399" />
                </LinkedinShareButton>
              </Box>
              <Button
                variant="contained"
                size="large"
                onClick={() => setOpenApplyModal(true)}
                sx={{
                  backgroundColor: "#003399",
                  color: "#FFFFFF",
                  textTransform: "none",
                  border: "1px solid #003399",
                  "&:hover": {
                    border: "1px solid #003399",
                    backgroundColor: "#003399",
                    color: "#FFFFFF",
                  },
                }}
              >
                Apply
              </Button>
            </Stack>
          </CardContent>
        </Card>
        {similerJobs && similerJobs.length > 0 && (
          <SimilarJobsSlider jobs={similerJobs} />
        )}
      </Container>
    </Stack>
  );
};

export default JobDetails;
