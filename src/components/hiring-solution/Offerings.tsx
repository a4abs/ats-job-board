import { Grid, Typography, Button, styled, Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const ButtonHover = styled(Button)({
  position: "relative",
  overflow: "hidden",
  border: "2px solid #FFFFFF",
  borderRadius: 0,
  borderBottom: "2px solid #000000",
  fontSize: "28px",
  color: "#000000",
  width: "100%",
  justifyContent: "flex-start",
  paddingLeft: 5,
  paddingRight: 5,
  "&:hover .MuiTypography-root": {
    color: "#FFFFFF",
  },
  "& .MuiSvgIcon-root": {
    position: "absolute",
    left: "0",
    top: "13px",
    opacity: "0",
  },
  "&:hover": {
    border: "2px solid rgb(62, 109, 14)",
    backgroundColor: "rgb(62, 109, 14)",
    color: "#FFFFFF",
    transform: "rotateY(360deg)",
    // fontSize: "24px",
    "& .MuiSvgIcon-root": {
      color: "#FFFFFF",
      opacity: "1", // Make the icon visible on hover
    },
  },
});

const AnimatedArrow = styled(LaunchIcon)({
  transition: "transform 0.3s ease-in-out",
});

const Offerings = ({
  offerings = [],
}: {
  offerings: Array<{ label: string; url?: string }>;
}) => {
  return (
    <Grid container spacing={2} mb={"5em"} mt={"2em"}>
      <Grid item xs={12} md={12}>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="400"
          fontSize="38px"
          lineHeight="48px"
          fontFamily="'JetBrains Mono', sans-serif"
          sx={{ marginBottom: "90px" }}
        >
          Our Offerings
        </Typography>
      </Grid>
      {offerings.map((offering) => (
        <Grid
          item
          xs={12}
          md={4}
          key={offering.label}
          sx={{
            paddingRight: {
              sm: 0,
              md: "15px",
            },
          }}
        >
          {offering.url ? (
            <ButtonHover size="large" variant="outlined" href={offering.url}>
              <Typography
                variant="h3"
                fontWeight="300"
                fontSize="28px"
                lineHeight="35px"
                fontFamily="'JetBrains Mono', sans-serif"
              >
                {offering.label}
              </Typography>
            </ButtonHover>
          ) : (
            <Box
              sx={{
                borderBottom: "2px solid #000000",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                fontWeight="300"
                fontSize="28px"
                lineHeight="35px"
                fontFamily="'JetBrains Mono', sans-serif"
                sx={{
                  paddingBottom: "15px",
                  paddingTop: "15px",
                  width: "100%",
                }}
              >
                {offering.label}
              </Typography>
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Offerings;
