import { style } from "@vanilla-extract/css";

enum Container {
  fill = "100%",
  sm = "640px",
  md = "768px",
  lg = "1024px",
  xl = "1280x",
  xxl = "1536px",
}

const fill = style({
  maxWidth: Container.fill,
});

const sm = style({
  maxWidth: Container.sm,
});

const md = style({
  maxWidth: Container.md,
});

const lg = style({
  maxWidth: Container.lg,
});

const xl = style({
  maxWidth: Container.xl,
});

const xxl = style({
  maxWidth: Container.xxl,
});

export const container = {
  fill,
  sm,
  md,
  lg,
  xl,
  xxl,
};

export const containerProperties = {
  maxWidth: Container,
};

export const containerShorthands = {
  container: ["maxWidth"] as ["maxWidth"],
};
