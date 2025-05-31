import { StyleSheet } from "react-native";

const GlobalValues = {
  colors: {
    backgroundColor: "#F6F7F9",
    black: "#000000",
    white: "#FFFFFF",
    primary: "#FF9F43",
    yellow: "#FFF479",
    green: "#E9FCCB",
  },
  button: {
    primary: "#FF9F43",
    secondary: "#EAEBED",
  },
  grey: {
    100: "#FFFFFF",
    200: "#F6F7F9",
    300: "#EAEBED",
    400: "#D7D8DA",
    500: "#C4C5C7",
    600: "#B1B3B6",
    700: "#9EA0A4",
    800: "#8B8D91",
    900: "#787A7E",
  },
  red: {
    100: "#fef2f2",
    200: "#fee2e2",
    300: "#fecaca",
    400: "#fca5a5",
    500: "#f87171",
    600: "#ef4444",
    700: "#dc2626",
    800: "#b91c1c",
    900: "#7f1d1d",
  },
  yellow: {
    100: "#fefce8",
    200: "#fef9c3",
    300: "#fef08a",
    400: "#fde047",
    500: "#facc15",
    600: "#eab308",
    700: "#ca8a04",
    800: "#a16207",
    900: "#422006",
  },
  blue: {
    100: "#eff6ff",
    200: "#dbeafe",
    300: "#bfdbfe",
    400: "#93c5fd",
    500: "#60a5fa",
    600: "#3b82f6",
    700: "#2563eb",
    800: "#1d4ed8",
    900: "#172554",
  },
  fonts: {
    black: "Lato-Black",
    blackItalic: "Lato-BlackItalic",
    bold: "Lato-Bold",
    boldItalic: "Lato-BoldItalic",
    italic: "Lato-Italic",
    light: "Lato-Light",
    lightItalic: "Lato-LightItalic",
    regular: "Lato-Regular",
    thin: "Lato-Thin",
    thinItalic: "Lato-ThinItalic",
  },
};

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalValues.colors.backgroundColor,
  },
});

export { GlobalStyles, GlobalValues };
