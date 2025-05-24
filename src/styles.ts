import { StyleSheet } from "react-native";

const GlobalColors = StyleSheet.create({
  colors: {
    backgroundColor: "#fff",
  },
});

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  headerFont: {
    fontFamily: "Lato-Black",
  },
  bodyFont: {
    fontFamily: "Lato-Regular",
  },
});

export { GlobalColors, GlobalStyles };
