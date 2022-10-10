import { style } from "@vanilla-extract/css";

enum Float {
  right = "right",
  left = "left",
  none = "none",
}

const right = style({
  float: Float.right,
});

const left = style({
  float: Float.left,
});

const none = style({
  float: Float.none,
});

export const float = {
  right,
  left,
  none,
};

export const floatProperties = {
  float: Float,
};

export const floatShorthands = {};
