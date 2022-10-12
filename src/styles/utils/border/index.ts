import {
  borderColor,
  borderColorProperties,
  borderColorShorthands,
} from "./borderColor.css";
import {
  borderRadiusProperties,
  borderRadiusShorthands,
} from "./borderRadius.css";
import {
  borderWidth,
  borderWidthProperties,
  borderWidthShorthands,
} from "./borderWidth.css";

export * from "./borderRadius.css";
export * from "./borderWidth.css";
export * from "./borderColor.css";

export const borderProperties = {
  ...borderRadiusProperties,
  ...borderWidthProperties,
  ...borderColorProperties,
};

export const borderShorthands = {
  ...borderRadiusShorthands,
  ...borderWidthShorthands,
  ...borderColorShorthands,
};

export const border = {
  ...borderWidth,
  ...borderColor,
};
