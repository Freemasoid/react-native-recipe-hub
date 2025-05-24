import { GlobalStyles } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.container,
    position: "relative",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flexDirection: "row",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 350,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 100,
  },
  text: {
    fontSize: 42,
    textAlign: "left",
    marginBottom: 5,
    ...GlobalStyles.headerFont,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 120,
    marginBottom: 30,
    alignItems: "center",
  },
});
