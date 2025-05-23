import { GlobalStyles } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: GlobalStyles.container,
  main: {
    flex: 1,
    paddingHorizontal: 16, // px-4
    paddingVertical: 24, // py-6
  },
  headerSection: {
    marginBottom: 32, // mb-8
  },
  title: {
    fontSize: 24, // text-2xl
    fontWeight: "bold",
    color: "#111827", // text-gray-900
    marginBottom: 8, // mb-2
    fontFamily: "Inter",
  },
  subtitle: {
    color: "#4b5563", // text-gray-600
    fontFamily: "Inter",
  },
  categoriesGrid: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 16, // gap-4
  },
  featuresSection: {
    marginTop: 48, // mt-12
    alignItems: "center" as const,
  },
  featuresTitle: {
    fontSize: 20, // text-xl
    fontWeight: "600", // font-semibold
    color: "#111827", // text-gray-900
    marginBottom: 16, // mb-4
    fontFamily: "Inter",
  },
  featuresGrid: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 24, // gap-6
    marginTop: 32, // mt-8
    justifyContent: "space-around" as const,
  },
  featureItem: {
    alignItems: "center" as const,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 48, // w-12
    height: 48, // h-12
    borderRadius: 24, // rounded-full
    alignItems: "center" as const,
    justifyContent: "center" as const,
    marginBottom: 12, // mb-3
  },
  orangeIconBg: {
    backgroundColor: "#fed7aa", // bg-orange-100
  },
  greenIconBg: {
    backgroundColor: "#dcfce7", // bg-green-100
  },
  blueIconBg: {
    backgroundColor: "#dbeafe", // bg-blue-100
  },
  iconText: {
    fontSize: 20, // text-xl
  },
  orangeIcon: {
    color: "#ea580c", // text-orange-600
  },
  greenIcon: {
    color: "#16a34a", // text-green-600
  },
  blueIcon: {
    color: "#2563eb", // text-blue-600
  },
  featureTitle: {
    fontWeight: "500", // font-medium
    color: "#111827", // text-gray-900
    marginBottom: 8, // mb-2
    fontFamily: "Inter",
  },
  featureDescription: {
    fontSize: 14, // text-sm
    color: "#4b5563", // text-gray-600
    textAlign: "center" as const,
    fontFamily: "Inter",
  },
});
