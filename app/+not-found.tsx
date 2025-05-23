import { Button } from "@/components/ui";
import { GlobalStyles } from "@/styles";
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
        <Text style={styles.headerText}>404</Text>
        <Text style={styles.bodyText}>Oops! Page not found</Text>
        <Button
          variant="primary"
          onPress={() => router.back()}
        >
          Return to Home
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: GlobalStyles.container,
  textContainer: {},
  headerText: GlobalStyles.headerText,
  bodyText: GlobalStyles.bodyText,
});
