import { style } from "@vanilla-extract/css";

enum Position {
  static = "static",
  fixed = "fixed",
  absolute = "absolute",
  relative = "relative",
  sticky = "sticky",
}

// static is keyword
const positionStatic = style({
  position: Position.static,
});

const fixed = style({
  position: Position.fixed,
});

const absolute = style({
  position: Position.absolute,
});

const relative = style({
  position: Position.relative,
});

const sticky = style({
  position: Position.sticky,
});

export const position = {
  static: positionStatic,
  fixed,
  absolute,
  relative,
  sticky,
};

export const positionProperties = {
  position: Position,
}

export const positionShorthands = {}
