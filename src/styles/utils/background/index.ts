import {
  backgroundAttachment,
  backgroundAttachmentProperties,
  backgroundAttachmentShorthands,
} from "./backgroundAttachment.css";
import {
  backgroundColorProperties,
  backgroundColorShorthands,
  bgColor,
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
  ...bgColor,
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
