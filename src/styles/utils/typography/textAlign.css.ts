import { style } from "@vanilla-extract/css";

enum TextAlign {
  left = "left",
  center = "center",
  right = "right",
  justify = "justify",
  start = "start",
  end = "end",
}

export const textAlign = {
  left: style({
    textAlign: TextAlign.left,
  }),
  center: style({
    textAlign: TextAlign.center,
  }),
  right: style({
    textAlign: TextAlign.right,
  }),
  justify: style({
    textAlign: TextAlign.justify,
  }),
  start: style({
    textAlign: TextAlign.start,
  }),
  end: style({
    textAlign: TextAlign.end,
  }),
};

export const textAlignProperties = {
  textAlign: TextAlign,
};

export const textAlignShorthands = {};
