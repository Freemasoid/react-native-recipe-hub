import { GlobalStyles, GlobalValues } from "@/styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { ...GlobalStyles.container, marginBottom: 24 },
  main: {
    flex: 1,
  },
  imageContainer: {
    aspectRatio: 16 / 10,
    position: "relative",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: 12,
    backgroundColor: GlobalValues.colors.white,
    borderRadius: 9999,
  },
  recipeInfo: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: GlobalValues.fonts.bold,
    color: "white",
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 24,
  },
  statBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9999,
  },
  statText: {
    fontSize: 16,
    fontFamily: GlobalValues.fonts.bold,
    color: "white",
  },
  content: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default styles;
