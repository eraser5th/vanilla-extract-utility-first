import { style } from "@vanilla-extract/css";

enum Box {
  border = "border-box",
  content = "content-box",
}

const border = style({
  boxSizing: Box.border,
});

const content = style({
  boxSizing: Box.content,
});

export const boxSizing = {
  border,
  content,
};

export const box = boxSizing;

export const boxSizingProperties = {
  boxSizing: Box,
};

export const boxSizingShorthands = {
  box: ["boxSizing"] as ["boxSizing"],
};
