import { User } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <User
            size={24}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Roman Reins</Text>
        </View>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FED7AA",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "500",
  },
  username: {
    fontSize: 14,
    color: "#6B7280",
  },
});
