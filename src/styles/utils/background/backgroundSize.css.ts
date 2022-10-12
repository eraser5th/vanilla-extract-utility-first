import { style } from "@vanilla-extract/css";

enum BackgroundSize {
  auto = "auto",
  cover = "cover",
  contain = "contain",
}

export const bgSize = {
  auto: style({
    backgroundSize: BackgroundSize.auto,
  }),
  cover: style({
    backgroundSize: BackgroundSize.cover,
  }),
  contain: style({
    backgroundSize: BackgroundSize.contain,
  }),
};

export const backgroundSizeProperties = {
  backgroundSize: BackgroundSize,
};

export const backgroundSizeShorthands = {
  bgSize: ["backgroundSize"] as ["backgroundSize"],
};
