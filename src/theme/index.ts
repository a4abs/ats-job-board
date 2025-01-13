import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles/createTheme";

import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";

import componentsOverrides from "./components";

const theme: Theme = createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
});

theme.components = componentsOverrides();

export default theme;
