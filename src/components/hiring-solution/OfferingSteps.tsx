import React from "react";
import { Container, Box, Grid, Typography, Stack } from "@mui/material";

interface OfferingStepsProps {
  data: {
    title: string;
    steps: Array<string>;
  };
}

const OfferingSteps = (props: OfferingStepsProps) => {
  const { title = "", steps = [] } = props.data;
  return (
    <Box bgcolor="#EBEBEB" py={6}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid xs={12}>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <Stack direction="column" gap={2} mt={6}>
            {steps.map((text, i) => (
              <Typography
                variant="body2"
                sx={{
                  fontSize: "22px",
                  lineHeight: "27px",
                }}
                key={`hiring-solution-${text}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default OfferingSteps;
