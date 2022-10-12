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
import {
  backgroundSizeProperties,
  backgroundSizeShorthands,
  bgSize,
} from "./backgroundSize.css";

export * from "./backgroundAttachment.css";
export * from "./backgroundColor.css";

export const bg = {
  ...backgroundAttachment,
  ...backgroundColor,
  ...bgSize,
};

export const backgroundProperties = {
  ...backgroundAttachmentProperties,
  ...backgroundColorProperties,
  ...backgroundSizeProperties,
};

export const backgroundShorthands = {
  ...backgroundAttachmentShorthands,
  ...backgroundColorShorthands,
  ...backgroundSizeShorthands,
};
