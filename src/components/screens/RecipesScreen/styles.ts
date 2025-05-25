import { GlobalStyles } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { ...GlobalStyles.container },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "flex-start",
    width: "100%",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  seeAll: {
    fontSize: 14,
    color: "#6B7280",
  },
  categoryButtons: {
    flexDirection: "row",
    marginVertical: 24,
    width: "100%",
    justifyContent: "space-between",
  },
});
