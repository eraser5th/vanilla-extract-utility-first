import { keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const ping = keyframes({
  "75%, 100%": {
    transform: "scale(2)",
    opacity: 0,
  },
});

const pulse = keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
});

const bounce = keyframes({
  "0%, 100%": {
    transform: "translateY(-25%)",
    animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
  },
  "50%": {
    transform: "translateY(0)",
    animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
  },
});

const animation = {
  none: "none",
  spin: `${spin} 1s linear infinite`,
  ping: `${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
  pulse: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  bounce: `${bounce} 1s infinite`,
};

const keys = ["none", "spin", "ping", "pulse", "bounce"] as const;

type Styles = Record<typeof keys[number], string>;

export const animate = keys
  .map((key) => ({
    [key]: style({ animation: animation[key] }),
  }))
  .reduce((a, b) => ({ ...a, ...b })) as Styles;

export const animateProperties = {
  animation,
};

export const animateShorthands = {
  animate: ["animation"] as ["animation"],
};
