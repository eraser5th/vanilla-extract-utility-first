import { style } from "@vanilla-extract/css";

enum BackgroundAttachment {
  fixed = "fixed",
  local = "local",
  scroll = "scroll",
}

const fixed = style({
  backgroundAttachment: BackgroundAttachment.fixed,
});

const local = style({
  backgroundAttachment: BackgroundAttachment.local,
});

const scroll = style({
  backgroundAttachment: BackgroundAttachment.scroll,
});

export const backgroundAttachment = {
  fixed,
  local,
  scroll,
};

export const bgAttachment = backgroundAttachment;

export const backgroundAttachmentProperties = {
  backgroundAttachment: BackgroundAttachment,
};

export const backgroundAttachmentShorthands = {
  bgAttachment: ["backgroundAttachment"] as ["backgroundAttachment"],
};
