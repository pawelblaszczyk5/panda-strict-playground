import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      },
    },
  },
  utilities: {
    display: {
      className: "d",
      property: "display",
      values: ["block", "flex"],
    },
    color: {
      className: "c",
      property: "color",
      values: "colors",
    },
  },
  outdir: "styled-system",
  strictTokens: true,
  jsxStyleProps: "none",
  eject: true,
});
