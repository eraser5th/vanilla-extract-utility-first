import { style } from "@vanilla-extract/css";

enum BorderRadius {
  none = "0px",
  px2 = "2px",
  px4 = "4px",
  px6 = "6px",
  px8 = "8px",
  px12 = "12px",
  px16 = "16px",
  px20 = "20px",
  px24 = "24px",
  full = "9999px",
}

const keys = [
  "none",
  "px2",
  "px4",
  "px6",
  "px8",
  "px12",
  "px16",
  "px20",
  "px24",
  "full",
] as const;

type BorderRadiusStyles = Record<typeof keys[number], string>;

const tl = keys
  .map((key) => ({
    [key]: style({
      borderTopLeftRadius: BorderRadius[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;
const tr = keys
  .map((key) => ({
    [key]: style({
      borderTopRightRadius: BorderRadius[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;
const bl = keys
  .map((key) => ({
    [key]: style({
      borderBottomLeftRadius: BorderRadius[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;
const br = keys
  .map((key) => ({
    [key]: style({
      borderBottomRightRadius: BorderRadius[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;

const borderRadius = keys
  .map((key) => ({
    [key]: style({
      borderRadius: BorderRadius[key],
    }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;

const t = keys
  .map((key) => ({
    [key]: style([tl[key], tr[key]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;

const l = keys
  .map((key) => ({
    [key]: style([tl[key], bl[key]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;

const b = keys
  .map((key) => ({
    [key]: style([bl[key], br[key]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;

const r = keys
  .map((key) => ({
    [key]: style([tr[key], br[key]]),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as BorderRadiusStyles;

export const rounded = {
  ...borderRadius,
  tl,
  tr,
  bl,
  br,
  t,
  l,
  b,
  r,
};

export const borderRadiusProperties = {
  borderRadius: BorderRadius,
  borderTopLeftRadius: BorderRadius,
  borderTopRightRadius: BorderRadius,
  borderBottomLeftRadius: BorderRadius,
  borderBottomRightRadius: BorderRadius,
};

export const borderRadiusShorthands = {
  rounded: ["borderRadius"] as ["borderRadius"],
  roundedtl: ["borderTopLeftRadius"] as ["borderTopLeftRadius"],
  roundedtr: ["borderTopRightRadius"] as ["borderTopRightRadius"],
  roundedbl: ["borderBottomLeftRadius"] as ["borderBottomLeftRadius"],
  roundedbr: ["borderBottomRightRadius"] as ["borderBottomRightRadius"],
  roundedt: ["borderTopLeftRadius", "borderTopRightRadius"] as [
    "borderTopLeftRadius",
    "borderTopRightRadius"
  ],
  roundedl: ["borderTopLeftRadius", "borderBottomLeftRadius"] as [
    "borderTopLeftRadius",
    "borderBottomLeftRadius"
  ],
  roundedb: ["borderTopRightRadius", "borderBottomRightRadius"] as [
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ],
  roundedr: ["borderTopRightRadius", "borderBottomRightRadius"] as [
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ],
};
