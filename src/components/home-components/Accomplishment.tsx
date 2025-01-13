import React from "react";

import {
  Box,
  Container,
  Typography,
  Stack,
  styled,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const StatText = styled(Typography)({
  fontFamily: "'Merriweather', sans-serif",
  color: "#FF6F61",
  fontWeight: "initial",
  fontSize: "48px",
  lineHeight: "60px",
});

export default function Accomplishment() {
  const [startCount, setStartCount] = React.useState(false);
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      alignItems="center"
      height={{
        xs: 90,
        sm: 200,
      }}
      bgcolor="#F5F5F5"
    >
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-evenly">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <StatText
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "48px",
                },
              }}
            >
              Since 2014
            </StatText>{" "}
          </motion.div>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#FFFFFF" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <StatText
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "48px",
                },
              }}
            >
              100+ Client
            </StatText>
          </motion.div>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#FFFFFF" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onViewportEnter={() => setStartCount(true)}
          >
            <StatText
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                  md: "48px",
                },
              }}
            >
              3500+ Joinings
            </StatText>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}
