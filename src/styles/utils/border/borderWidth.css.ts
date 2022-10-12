import { style } from "@vanilla-extract/css";

enum BorderWidth {
  px0 = "0px",
  px1 = "1px",
  px2 = "2px",
  px4 = "4px",
  px8 = "8px",
}

const keys = ["px0", "px1", "px2", "px4", "px8"] as const;

type BorderWidthStyles = Record<typeof keys[number], string>;

const normal = keys
  .map((key) => ({
    [key]: style({
      borderWidth: BorderWidth[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderWidthStyles;

const t = keys
  .map((key) => ({
    [key]: style({
      borderTopWidth: BorderWidth[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderWidthStyles;

const l = keys
  .map((key) => ({
    [key]: style({
      borderLeftWidth: BorderWidth[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderWidthStyles;

const b = keys
  .map((key) => ({
    [key]: style({
      borderBottomWidth: BorderWidth[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderWidthStyles;

const r = keys
  .map((key) => ({
    [key]: style({
      borderRightWidth: BorderWidth[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderWidthStyles;

const x = keys
  .map((key) => ({
    [key]: style([l[key], r[key]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderWidthStyles;

const y = keys
  .map((key) => ({
    [key]: style([t[key], b[key]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderWidthStyles;

export const borderWidth = {
  ...normal,
  t,
  l,
  b,
  r,
  x,
  y,
};

export const borderWidthProperties = {
  borderWidth: BorderWidth,
  borderTopWidth: BorderWidth,
  borderLeftWidth: BorderWidth,
  borderBottomWidth: BorderWidth,
  borderRightWidth: BorderWidth,
};

export const borderWidthShorthands = {
  borderWidth: ["borderWidth"] as ["borderWidth"],
  borderWidthT: ["borderTopWidth"] as ["borderTopWidth"],
  borderWidthL: ["borderLeftWidth"] as ["borderLeftWidth"],
  borderWidthB: ["borderBottomWidth"] as ["borderBottomWidth"],
  borderWidthR: ["borderRightWidth"] as ["borderRightWidth"],
  borderWidthX: ["borderLeftWidth", "borderBottomWidth"] as [
    "borderLeftWidth",
    "borderBottomWidth"
  ],
  borderWidthY: ["borderTopWidth", "borderBottomWidth"] as [
    "borderTopWidth",
    "borderBottomWidth"
  ],
};
