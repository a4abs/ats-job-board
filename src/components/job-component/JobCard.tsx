import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  Box,
  Grid,
  Link,
  Button,
  Chip,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

dayjs.extend(relativeTime);

interface Props {
  job: {
    id: number;
    title: string;
    experience: {
      min: number;
      max: number;
    };
    salary: {
      min: number;
      max: number;
    };
    location: string;
    functionalArea: {
      secondary: string;
    };
    description: string;
    createdAt: string;
    isFeatured: boolean;
  };
  showDescription?: boolean;
}

const makeUrl = (inputString: string) => {
  return inputString
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-");
};

const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

const JobCard = (props: Props) => {
  const {
    id = "",
    title = "",
    experience,
    salary,
    location,
    functionalArea,
    description,
    createdAt,
    isFeatured = false,
  } = props.job;
  const { showDescription = true } = props;

  return (
    <Link
      href={`/jobs/${makeUrl(title)}-${id}`}
      sx={{
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          {isFeatured && (
            <Chip
              label="Featured"
              color="success"
              size="small"
              sx={{ "& .MuiChip-label": { color: "#FFFFFF" } }}
            />
          )}
          <Typography
            variant="h2"
            fontWeight={"medium"}
            fontFamily="Inter, sans-serif"
            fontSize="20px"
            lineHeight="32px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Typography>
          <Stack direction={"row"} gap={3} py={0.5} flexWrap="wrap">
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={1}
            >
              <BusinessCenterIcon sx={{ fontSize: 18 }} color="primary" />
              <Typography variant="body2">
                {`${experience.min}-${experience.max} Yrs`}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={1}
            >
              <LocationOnIcon sx={{ fontSize: 18 }} color="primary" />
              <Typography variant="body2">{location}</Typography>
            </Box>
          </Stack>
          <Grid container spacing={0.5} flexWrap="nowrap">
            <Grid item xs={3} md={2} minWidth="100px">
              <Typography variant="body2">Key Area</Typography>
            </Grid>
            <Grid item xs={9} md={10} maxWidth="79% !important">
              <Typography variant="body2">
                {functionalArea.secondary}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={0.5}>
            {showDescription && (
              <Grid item xs={12} md={2}>
                <Typography variant="body2">Description</Typography>
              </Grid>
            )}
            {showDescription && (
              <Grid item xs={12} md={10}>
                <Typography variant="body2">
                  {truncateString(description, 180)}
                </Typography>
              </Grid>
            )}
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
            >
              <AccessTimeFilledIcon fontSize="small" color="primary" />{" "}
              <Typography variant="body2">
                {` ${dayjs(createdAt).fromNow()}`}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={0.5}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "rgba(0,51,153)",
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
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;
