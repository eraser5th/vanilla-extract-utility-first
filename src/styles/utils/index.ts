import { animationProperties, animationShorthands } from "./animation";
import { backgroundProperties, backgroundShorthands } from "./background";
import { borderProperties, borderShorthands } from "./border";
import { layoutProperties, layoutShorthands } from "./layout";
import { sizingProperties, sizingShorthands } from "./sizing";
import { spacingProperties, spacingShorthands } from "./spacing";
import { transitionProperties, transitionShorthands } from "./transition";
import { typographyProperties, typographyShorthands } from "./typography";

export * from "./layout";
export * from "./background";
export * from "./spacing";
export * from "./sizing";
export * from "./border";
export * from "./typography";
export * from "./transition";
export * from "./animation";

export const properties = {
  ...layoutProperties,
  ...backgroundProperties,
  ...spacingProperties,
  ...sizingProperties,
  ...typographyProperties,
  ...borderProperties,
  ...transitionProperties,
  ...animationProperties,
};

export const shorthands = {
  ...layoutShorthands,
  ...backgroundShorthands,
  ...spacingShorthands,
  ...sizingShorthands,
  ...typographyShorthands,
  ...borderShorthands,
  ...transitionShorthands,
  ...animationShorthands,
};
