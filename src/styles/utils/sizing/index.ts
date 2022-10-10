import { widthProperties, widthShorthands } from "./width.css";
import { heightProperties, heightShorthands } from "./height.css";

export * from "./width.css";
export * from "./height.css";

export const sizingProperties = {
  ...widthProperties,
  ...heightProperties,
};

export const sizingShorthands = {
  ...widthShorthands,
  ...heightShorthands,
};
