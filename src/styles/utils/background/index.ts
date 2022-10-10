import {
  backgroundAttachment,
  backgroundAttachmentProperties,
  backgroundAttachmentShorthands,
} from "./backgroundAttachment.css";
import {
  backgroundColor,
  backgroundColorProperties,
  backgroundColorShorthands,
} from "./backgroundColor.css";

export * from "./backgroundAttachment.css";
export * from "./backgroundColor.css";

export const bg = {
  ...backgroundAttachment,
  ...backgroundColor,
};

export const backgroundProperties = {
  ...backgroundAttachmentProperties,
  ...backgroundColorProperties,
};

export const backgroundShorthands = {
  ...backgroundAttachmentShorthands,
  ...backgroundColorShorthands,
};
