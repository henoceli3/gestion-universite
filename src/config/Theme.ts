import { extendTheme } from "@chakra-ui/react";

export const colorsDef = {
  primary: localStorage.getItem("primary") || "#7b3f00",
  secondary: localStorage.getItem("secondary") || "#ffa07a",
  tertiary: localStorage.getItem("tertiary") || "#e1a101",
  bgColor: localStorage.getItem("bgColor") || "#fff4ec",
  alter: localStorage.getItem("alter") || "#fa8072ac",
  danger: "#d62828",
};

export const antAppToken = {
  colorPrimary: colorsDef.primary,
  colorSecondary: colorsDef.secondary,
};

export const appTheme = {
  colors: {
    primary: colorsDef.primary,
    secondary: colorsDef.secondary,
    tertiary: colorsDef.tertiary,
    bgColor: colorsDef.bgColor,
    alter: colorsDef.alter,
  },
};

export const chakraTheme = extendTheme({
  colors: {
    primary: colorsDef.primary,
    secondary: colorsDef.secondary,
    tertiary: colorsDef.tertiary,
    bgColor: colorsDef.bgColor,
  },
  styles: {
    global: {
      body: {
        bg: "bgColor",
        backdropBlur: "10px",
      },
    },
  },
});
