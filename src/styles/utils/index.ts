import { backgroundProperties, backgroundShorthands } from "./background";
import { layoutProperties, layoutShorthands } from "./layout";
import { spacingProperties, spacingShorthands } from "./spacing";

export * from "./layout";
export * from "./background";
export * from "./spacing";

export const properties = {
  ...layoutProperties,
  ...backgroundProperties,
  ...spacingProperties,
};

export const shorthands = {
  ...layoutShorthands,
  ...backgroundShorthands,
  ...spacingShorthands,
};
