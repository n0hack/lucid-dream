import { DefaultTheme } from "styled-components";

const colors = {
  text: {
    black: "#333333",
    placeholder: "#797979",
    white: "#ffffff",
  },
  bg: {
    black: "#000000",
    white: "#ffffff",
  },
};

export type ColorsType = typeof colors;

const theme: DefaultTheme = {
  colors,
};

export default theme;
