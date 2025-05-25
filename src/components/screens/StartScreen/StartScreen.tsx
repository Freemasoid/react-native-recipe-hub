import { Button } from "@/components/ui";
import { GlobalColors } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const StartScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.imageContainer}>
        <Image
          source={require("~/assets/images/beverage.jpg")}
          style={styles.image}
        />
        <Image
          source={require("~/assets/images/fruits.jpg")}
          style={styles.image}
        />
        <Image
          source={require("~/assets/images/pancakes.jpg")}
          style={styles.image}
        />

        <LinearGradient
          colors={["transparent", GlobalColors.colors.backgroundColor]}
          style={styles.gradient}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Discover</Text>

        <Text style={[styles.text, { color: "#FF9F43" }]}>
          Delights <Text style={{ color: "#D77E53" }}> Around</Text>
        </Text>

        <Text style={[styles.text, { color: "#E78399" }]}>
          Every <Text style={{ color: "#F2D073" }}>Corner</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          onPress={() => router.push("/recipes")}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};
export default StartScreen;
