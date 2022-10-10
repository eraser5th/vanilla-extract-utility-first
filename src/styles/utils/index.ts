import { backgroundProperties, backgroundShorthands } from "./background";
import { layoutProperties, layoutShorthands } from "./layout";

export * from "./layout";
export * from "./background";

export const properties = {
  ...layoutProperties,
  ...backgroundProperties,
};

export const shorthands = {
  ...layoutShorthands,
  ...backgroundShorthands,
};
