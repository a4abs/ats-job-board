import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme, ownerState }: any) => {
  const { bgColor, color, opacity, borderRadius } = ownerState;

  // background value
  let backgroundValue = bgColor;

  // color value
  let colorValue = color;

  // borderRadius value
  let borderRadiusValue = borderRadius;

  // boxShadow value
  let boxShadowValue = "none";

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});
