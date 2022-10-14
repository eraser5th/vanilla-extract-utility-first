import { style } from "@vanilla-extract/css";
import { hover } from "../styles/splinkles";
import {
  bg,
  borderWidth,
  box,
  duration,
  fontSize,
  fontWeight,
  h,
  px,
  rounded,
  textColor,
  transition,
} from "../styles/utils";

export const button = style([
  box.border,
  h.px48,
  px.px24,
  bg.sky600,
  fontWeight.bold,
  fontSize.lg,
  textColor.white,
  borderWidth.px0,
  rounded.px8,
  duration.ms200,
  transition.colors,
  hover({
    bgColor: "sky700",
  }),
]);
