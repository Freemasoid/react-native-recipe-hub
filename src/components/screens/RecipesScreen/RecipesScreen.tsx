import { Button, Carousel, Header } from "@/components/ui";
import { Text, View } from "react-native";
import { styles } from "./styles";

const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Most Popular</Text>
        <Carousel />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Choose your food</Text>
        <View style={styles.categoryButtons}>
          <Button
            variant="selection"
            onPress={() => {}}
          >
            Breakfast
          </Button>
          <Button
            variant="selection"
            onPress={() => {}}
          >
            Lunch
          </Button>
          <Button
            variant="selection"
            onPress={() => {}}
          >
            Dinner
          </Button>
        </View>

        <View>
          <Carousel />
        </View>
      </View>
    </View>
  );
};

export default RecipesScreen;
