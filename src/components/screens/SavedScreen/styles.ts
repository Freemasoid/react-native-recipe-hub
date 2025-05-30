import { GlobalStyles, GlobalValues } from "@/styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: GlobalStyles.container,
  header: {
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
    alignItems: "center",
    fontFamily: GlobalValues.fonts.black,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalValues.colors.black,
  },
  recipesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "100%",
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  noFavoritesText: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: GlobalValues.fonts.bold,
    color: GlobalValues.colors.black,
  },
});

export default styles;
