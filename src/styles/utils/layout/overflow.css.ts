import { style } from "@vanilla-extract/css";

// TODO: 追加

enum Overflow {
  auto = "auto",
  hidden = "hidden",
  clip = "clip",
  visible = "visible",
  scroll = "scroll",
}

const auto = style({
  overflow: Overflow.auto,
});

const hidden = style({
  overflow: Overflow.hidden,
});

const clip = style({
  overflow: Overflow.clip,
});

const visible = style({
  overflow: Overflow.visible,
});

const scroll = style({
  overflow: Overflow.scroll,
});

export const overflow = {
  auto,
  hidden,
  clip,
  visible,
  scroll,
};

export const overflowProperties = {
  overflow: Overflow,
};

export const overflowShorthands = {};
