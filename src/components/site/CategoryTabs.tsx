import React from "react";
import { Tabs, Tab, Box, Typography, Link, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const tabStyle = {
  padding: 0,
  marginRight: 2,
  fontWeight: "bold",
};

const viewAllStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

export default () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box width="100%">
      <Box>
        <Typography variant="h3" pt={7} pb={2}>
          Explore all categories
        </Typography>
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ padding: 0, marginBottom: 1 }}
      >
        <Tab value="1" label="Interview Tips" sx={tabStyle} />
        <Tab value="2" label="Salary & Negotiations" sx={tabStyle} />
        <Tab value="3" label="Resume & Cover Letters" sx={tabStyle} />
        <Tab value="4" label="Work Life Balance" sx={tabStyle} />
      </Tabs>
      {value == "1" && (
        <>
          <Stack direction={"row"} gap={2} pt={3} pb={4}>
            <Link
              href="/career-advice/interview-tips"
              variant="body2"
              underline="none"
            >
              Interview Tips (6)
            </Link>
            <Link
              href="/career-advice/interview-tips"
              variant="body2"
              underline="none"
            >
              Crack Interview (16)
            </Link>
            <Link
              href="/career-advice/interview-tips"
              variant="body2"
              underline="none"
            >
              Prepare Interview (19)
            </Link>
          </Stack>
          <Link
            href="/career-advice/interview-tips"
            variant="body2"
            fontWeight={"bold"}
            underline="none"
            sx={viewAllStyle}
          >
            View all in Interview Tips <ChevronRightIcon fontSize="inherit" />
          </Link>
        </>
      )}
      {value == "2" && (
        <>
          <Stack direction={"row"} gap={2} pt={3} pb={4}>
            <Link
              href="/career-advice/salary-negotiation"
              variant="body2"
              underline="none"
            >
              Interview Tips (6)
            </Link>
            <Link
              href="/career-advice/salary-negotiation"
              variant="body2"
              underline="none"
            >
              Crack Interview (16)
            </Link>
            <Link
              href="/career-advice/salary-negotiation"
              variant="body2"
              underline="none"
            >
              Prepare Interview (19)
            </Link>
          </Stack>

          <Link
            href="/career-advice/salary-negotiation"
            variant="body2"
            underline="none"
            fontWeight={"bold"}
            sx={viewAllStyle}
          >
            View all in Salary & Negotiations{" "}
            <ChevronRightIcon fontSize="inherit" />
          </Link>
        </>
      )}
      {value == "3" && (
        <>
          <Stack direction={"row"} gap={2} pt={3} pb={4}>
            <Link
              href="/career-advice/resume-cover-letters"
              variant="body2"
              underline="none"
            >
              Interview Tips (6)
            </Link>
            <Link
              href="/career-advice/resume-cover-letters"
              variant="body2"
              underline="none"
            >
              Crack Interview (16)
            </Link>
            <Link
              href="/career-advice/resume-cover-letters"
              variant="body2"
              underline="none"
            >
              Prepare Interview (19)
            </Link>
          </Stack>
          <Link
            href="/career-advice/resume-cover-letters"
            variant="body2"
            underline="none"
            sx={viewAllStyle}
            fontWeight={"bold"}
          >
            View all in Resume & Cover letters{" "}
            <ChevronRightIcon fontSize="inherit" />
          </Link>
        </>
      )}
      {value == "4" && (
        <>
          <Stack direction={"row"} gap={2} pt={3} pb={4}>
            <Link
              href="/career-advice/work-life-balance"
              variant="body2"
              underline="none"
            >
              Interview Tips (6)
            </Link>
            <Link
              href="/career-advice/work-life-balance"
              variant="body2"
              underline="none"
            >
              Crack Interview (16)
            </Link>
            <Link
              href="/career-advice/work-life-balance"
              variant="body2"
              underline="none"
            >
              Prepare Interview (19)
            </Link>
          </Stack>
          <Link
            href="/career-advice/work-life-balance"
            variant="body2"
            underline="none"
            sx={viewAllStyle}
            fontWeight={"bold"}
          >
            View all in Work Life Balance{" "}
            <ChevronRightIcon fontSize="inherit" />
          </Link>
        </>
      )}
    </Box>
  );
};
