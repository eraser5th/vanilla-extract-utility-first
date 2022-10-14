import { widthProperties, widthShorthands } from "./width.css";
import { heightProperties, heightShorthands } from "./height.css";
import { minHeightProperties, minHeightShorthands } from "./minHeight.css";

export * from "./width.css";
export * from "./height.css";
export * from "./minHeight.css";

export const sizingProperties = {
  ...widthProperties,
  ...heightProperties,
  ...minHeightProperties,
};

export const sizingShorthands = {
  ...widthShorthands,
  ...heightShorthands,
  ...minHeightShorthands,
};
