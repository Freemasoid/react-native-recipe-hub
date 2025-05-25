import { Button } from "@/components/ui";
import { GlobalStyles } from "@/styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

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
        onPress={() => router.push("/recipes")}
      >
        Return to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: GlobalStyles.container,
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headerText: {
    ...GlobalStyles.headerFont,
    fontSize: 100,
  },
  bodyText: {
    ...GlobalStyles.bodyFont,
    fontSize: 20,
  },
});
