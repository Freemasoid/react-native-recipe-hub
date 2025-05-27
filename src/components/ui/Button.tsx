import { GlobalValues } from "@/styles";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

export type ButtonProps = {
  variant: "primary" | "secondary" | "selectionActive" | "selectionInactive";
  children: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
};

function Button({ variant, children, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
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
    backgroundColor: GlobalValues.button.primary,
    ...(Platform.OS === "android" && { elevation: 5 }),
  },
  secondary: {
    backgroundColor: GlobalValues.button.secondary,
  },
  selectionActive: {
    backgroundColor: GlobalValues.colors.black,
    width: "30%",
    marginRight: 0,
    paddingHorizontal: 10,
  },
  selectionInactive: {
    backgroundColor: GlobalValues.grey[400],
    width: "30%",
    marginRight: 0,
    paddingHorizontal: 10,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    marginVertical: 5,
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
    color: GlobalValues.colors.white,
  },
  secondaryText: {
    color: GlobalValues.colors.black,
  },
  selectionActiveText: {
    color: GlobalValues.colors.white,
    fontSize: 14,
  },
  selectionInactiveText: {
    color: GlobalValues.colors.black,
    fontSize: 14,
  },
});
