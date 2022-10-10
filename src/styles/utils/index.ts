import { backgroundProperties, backgroundShorthands } from "./background";
import { layoutProperties, layoutShorthands } from "./layout";
import { sizingProperties, sizingShorthands } from "./sizing";
import { spacingProperties, spacingShorthands } from "./spacing";

export * from "./layout";
export * from "./background";
export * from "./spacing";
export * from "./sizing";

export const properties = {
  ...layoutProperties,
  ...backgroundProperties,
  ...spacingProperties,
  ...sizingProperties,
};

export const shorthands = {
  ...layoutShorthands,
  ...backgroundShorthands,
  ...spacingShorthands,
  ...sizingShorthands,
};
