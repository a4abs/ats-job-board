import { Grid, Typography, Box, Container } from "@mui/material";

const row1 = ["Education", "Fintech", "Not for Profits", "Consumer internet"];
const row2 = ["Insurance", "Software", "B2B services"];

const Industries = () => {
  return (
    <>
      <Grid container spacing={3} mt={"2em"}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight="400"
            fontSize="38px"
            lineHeight="48px"
            fontFamily="'Merriweather', sans-serif"
            sx={{ marginBottom: "100px" }}
          >
            Industries
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: "1px solid #000000", mb: 4 }}>
        <Container maxWidth="xl" component={Box}>
          <Grid container>
            {row1.map((name) => (
              <Grid
                item
                xs={12}
                md={3}
                key={name}
                sx={{
                  paddingRight: {
                    sm: 0,
                    md: "15px",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="400"
                  fontSize="22px"
                  lineHeight="27px"
                  fontFamily="'Merriweather', sans-serif"
                  sx={{
                    paddingBottom: "15px",
                  }}
                >
                  {name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ borderBottom: "1px solid #000000" }}>
        <Container maxWidth="xl" component={Box}>
          <Grid container>
            {row2.map((name) => (
              <Grid
                item
                xs={12}
                md={3}
                key={name}
                sx={{
                  paddingRight: {
                    sm: 0,
                    md: "15px",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="400"
                  fontSize="22px"
                  lineHeight="27px"
                  fontFamily="'Merriweather', sans-serif"
                  sx={{
                    paddingBottom: "15px",
                  }}
                >
                  {name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Industries;
