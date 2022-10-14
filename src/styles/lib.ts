export const className = (...classNames: (string | false)[]): string =>
  classNames.filter((v) => v !== false).join(" ");
