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
