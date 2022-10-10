import { marginProperties, marginShorthands } from "./margin.css";
import { paddingProperties, paddingShorthands } from "./padding.css";

export * from "./margin.css";
export * from "./padding.css";

export const spacingProperties = {
  ...marginProperties,
  ...paddingProperties,
};

export const spacingShorthands = {
  ...marginShorthands,
  ...paddingShorthands,
};
