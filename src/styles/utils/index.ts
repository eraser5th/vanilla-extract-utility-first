import { backgroundProperties, backgroundShorthands } from "./background";
import { layoutProperties, layoutShorthands } from "./layout";
import { sizingProperties, sizingShorthands } from "./sizing";
import { spacingProperties, spacingShorthands } from "./spacing";
import { typographyProperties, typographyShorthands } from "./typography";

export * from "./layout";
export * from "./background";
export * from "./spacing";
export * from "./sizing";

export const properties = {
  ...layoutProperties,
  ...backgroundProperties,
  ...spacingProperties,
  ...sizingProperties,
  ...typographyProperties,
};

export const shorthands = {
  ...layoutShorthands,
  ...backgroundShorthands,
  ...spacingShorthands,
  ...sizingShorthands,
  ...typographyShorthands,
};
