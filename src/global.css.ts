import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 400,
});

globalStyle("a", {
  fontWeight: 500,
  color: "#646cff",
  textDecoration: "inherit",
});
globalStyle("a:hover", {
  color: "#535bf2",
});

globalStyle("body", {
  margin: 0,
});
