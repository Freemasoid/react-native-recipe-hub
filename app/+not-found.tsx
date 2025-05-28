import { Button } from "@/components/ui";
import { GlobalStyles, GlobalValues } from "@/styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <FontAwesome5
          name="heart-broken"
          size={100}
          color="black"
        />

        <Text style={styles.headerText}>404</Text>

        <Text style={styles.bodyText}>Oops! Page not found</Text>
      </View>

      <Button
        variant="primary"
        onPress={() => router.replace("/recipes")}
      >
        Return to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.container,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
  },
  headerText: {
    fontFamily: GlobalValues.fonts.black,
    fontSize: 100,
  },
  bodyText: {
    fontFamily: GlobalValues.fonts.regular,
    fontSize: 20,
  },
});
