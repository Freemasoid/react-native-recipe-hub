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
  profileContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "100%",
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  profileHeader: {
    backgroundColor: GlobalValues.colors.white,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderColor: GlobalValues.grey[400],
    borderWidth: 0.5,
  },
  profileHeaderContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: GlobalValues.colors.black,
    marginBottom: 4,
    fontFamily: GlobalValues.fonts.bold,
  },
  profileEmail: {
    fontSize: 14,
    color: GlobalValues.grey[900],
    marginBottom: 6,
    fontFamily: GlobalValues.fonts.regular,
  },
  memberSince: {
    fontSize: 12,
    color: GlobalValues.grey[800],
    fontFamily: GlobalValues.fonts.regular,
  },
  editButton: {
    padding: 8,
    borderRadius: 20,
  },
  optionsContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  logoutContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
});

export default styles;
