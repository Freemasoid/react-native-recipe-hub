import { GlobalValues } from "@/styles";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface OptionCardProps {
  icon: React.ReactNode;
  value?: string;
  label: string;
  color: string;
  bgColor: string;
}

const { width } = Dimensions.get("window");
const cardSpacing = 16;

const OptionCard = ({
  icon,
  value,
  label,
  bgColor,
  color,
}: OptionCardProps) => {
  return (
    <TouchableOpacity style={styles.optionCard}>
      <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
        {icon}
      </View>
      <Text style={styles.optionValue}>{value}</Text>
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    width: (width - cardSpacing * 5) / 2,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: GlobalValues.grey[400],
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  optionValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalValues.colors.black,
    marginBottom: 4,
    fontFamily: GlobalValues.fonts.bold,
  },
  optionLabel: {
    fontSize: 16,
    color: GlobalValues.grey[900],
    fontFamily: GlobalValues.fonts.regular,
  },
});

export default OptionCard;
