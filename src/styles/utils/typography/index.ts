import {
  fontFamily,
  fontFamilyProperties,
  fontFamilyShorthands,
} from "./fontFamily.css";
import { fontSizeProperties, fontSizeShorthands } from "./fontSize.css";
import {
  fontWeight,
  fontWeightProperties,
  fontWeightShorthands,
} from "./fontWeight.css";
import { lineHeightProperties, lineHeightShorthands } from "./lineHeight.css";
import { listStyleProperties, listStyleShorthands } from "./listStyle.css";
import {
  textAlign,
  textAlignProperties,
  textAlignShorthands,
} from "./textAlign.css";
import {
  textColor,
  textColorProperties,
  textColorShorthands,
} from "./textColor.css";

export * from "./fontFamily.css";
export * from "./fontSize.css";
export * from "./fontWeight.css";
export * from "./lineHeight.css";
export * from "./listStyle.css";
export * from "./textColor.css";

export const typographyProperties = {
  ...fontFamilyProperties,
  ...fontSizeProperties,
  ...fontWeightProperties,
  ...lineHeightProperties,
  ...listStyleProperties,
  ...textAlignProperties,
  ...textColorProperties,
};

export const typographyShorthands = {
  ...fontFamilyShorthands,
  ...fontSizeShorthands,
  ...fontWeightShorthands,
  ...lineHeightShorthands,
  ...listStyleShorthands,
  ...textAlignShorthands,
  ...textColorShorthands,
};

export const font = {
  ...fontFamily,
  ...fontWeight,
};

export const text = {
  ...textAlign,
  ...textColor,
};
