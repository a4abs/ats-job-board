import { Button, styled } from "@mui/material";

export const LargeButton = styled(Button)({
  backgroundColor: "#003399",
  color: "#FFFFFF",
  textTransform: "none",
  "&:hover": {
    border: "1px solid #003399",
    backgroundColor: "#003399",
    color: "#FFFFFF",
  },
});
