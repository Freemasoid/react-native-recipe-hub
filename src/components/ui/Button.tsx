import { GlobalColors } from "@/styles";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";

export type ButtonProps = {
  variant: "primary" | "secondary" | "selection";
  children: React.ReactNode;
  onPress: () => void;
};

function Button({ variant, children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{children}</Text>
    </TouchableOpacity>
  );
}
export default Button;

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "90%",
    fontSize: 20,
    fontWeight: "700",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Platform.OS === "ios" ? 5 : 0,
    marginVertical: 5,
    alignItems: "center",
  },
  primary: {
    backgroundColor: GlobalColors.button.primary,
    ...(Platform.OS === "android" && { elevation: 5 }),
  },
  secondary: {
    backgroundColor: GlobalColors.button.secondary,
  },
  selection: {
    backgroundColor: GlobalColors.colors.black,
    width: 115,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
    fontFamily: "Lato-Black",
  },
  primaryText: {
    color: GlobalColors.colors.white,
  },
  secondaryText: {
    color: GlobalColors.colors.black,
  },
  selectionText: {
    color: GlobalColors.colors.white,
    fontSize: 14,
  },
});
