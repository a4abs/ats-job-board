import React from "react";
import {
  Grid,
  Typography,
  Stack,
  styled,
  Container,
  Button,
  Box,
} from "@mui/material";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

import { LargeButton } from "../LargeButton";

const ActionBox = styled(Stack)({
  border: "1px solid rgba(74, 58, 118, .5)",
  borderRadius: 4,
  padding: 30,
  minHeight: 220,
  flex: 1,
  height: "100%",
});

const QuickActions = () => {
  return (
    <Grid container justifyContent="center" mb={"7.5em"}>
      <Container maxWidth="xl" sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Typography variant="h2">How we match</Typography>

        <Grid container maxWidth="xl" spacing={3} my={2}>
          <Grid item xs={12} md={4}>
            <ActionBox
              direction="column"
              gap={3}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Box>
                <PersonSearchOutlinedIcon
                  color="primary"
                  sx={{ ml: 1 }}
                  fontSize="large"
                />
                <Typography ml={1}>Looking to hire?</Typography>
                <Typography variant="body2" ml={1}>
                  Speak to one of our experienced consultants about your
                  recruitment needs.
                </Typography>
              </Box>
              <LargeButton
                variant="contained"
                size="large"
                sx={{ width: "max-content" }}
                href="/contact"
              >
                Request a call back
              </LargeButton>
            </ActionBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionBox
              direction="column"
              gap={3}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Box>
                <PeopleOutlineOutlinedIcon
                  color="primary"
                  sx={{ ml: 1 }}
                  fontSize="large"
                />
                <Typography ml={1}>Join Our team</Typography>
                <Typography variant="body2" ml={1}>
                  Please tell us more about your experience with Savanna HR.
                </Typography>
              </Box>
              <LargeButton
                variant="contained"
                size="large"
                sx={{ width: "200px" }}
              >
                Join Us
              </LargeButton>
            </ActionBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <ActionBox
              direction="column"
              gap={3}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Box>
                <ContentPasteSearchOutlinedIcon
                  color="primary"
                  sx={{ ml: 1 }}
                  fontSize="large"
                />
                <Typography ml={1}>Start your job search</Typography>
                <Typography variant="body2" ml={1}>
                  Get started with your job search today and take the next step
                  in your career.
                </Typography>
              </Box>
              <LargeButton
                variant="contained"
                size="large"
                sx={{ width: "200px" }}
                href="/jobs"
              >
                Search for jobs
              </LargeButton>
            </ActionBox>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default QuickActions;
