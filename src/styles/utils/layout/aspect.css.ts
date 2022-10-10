import { style } from "@vanilla-extract/css";

enum AspectRatio {
  auto = "auto",
  square = "1 / 1",
  video = "16 / 9",
}

const auto = style({
  aspectRatio: AspectRatio.auto,
});

const square = style({
  aspectRatio: AspectRatio.square,
});

const video = style({
  aspectRatio: AspectRatio.video,
});

export const aspectRatio = {
  auto,
  square,
  video,
};

export const aspect = aspectRatio;

export const aspectRatioProperties = {
  // aspectRatio: {
  //   auto: AspectRatio.auto,
  //   square: AspectRatio.square,
  //   video: AspectRatio.video,
  // },
  aspectRatio: AspectRatio,
};

export const aspectRatioShorthands = {
  aspect: ["aspectRatio"] as ["aspectRatio"],
};
