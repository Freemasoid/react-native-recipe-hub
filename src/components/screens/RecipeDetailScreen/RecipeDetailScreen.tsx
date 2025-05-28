import {
  IngredientList,
  RecipeDescription,
  RecipeInstructions,
} from "@/components";
import type { Recipe } from "@/mock-data";
import { GlobalStyles, GlobalValues } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ArrowLeft, Clock, Star } from "lucide-react-native";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const RecipeDetailScreen = ({ recipe }: { recipe: Recipe }) => {
  const handleBackNav = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: recipe.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["transparent", GlobalValues.colors.black]}
            style={styles.gradient}
          />

          <Pressable
            onPress={handleBackNav}
            style={styles.backButton}
          >
            <ArrowLeft
              size={20}
              strokeWidth={3}
            />
          </Pressable>

          <View style={styles.recipeInfo}>
            <Text style={styles.title}>{recipe.title}</Text>

            <View style={styles.statsContainer}>
              <View style={styles.statBadge}>
                <Clock
                  size={16}
                  color={GlobalValues.colors.white}
                />
                <Text style={styles.statText}>{recipe.cookTime}</Text>
              </View>

              <View style={styles.statBadge}>
                <Star
                  size={16}
                  color={GlobalValues.colors.primary}
                  fill={GlobalValues.colors.primary}
                />
                <Text style={styles.statText}>{recipe.rating}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <RecipeDescription description={recipe.description} />
        </View>

        <View style={styles.content}>
          <IngredientList ingredients={recipe.ingredients} />
        </View>

        <View style={styles.content}>
          <RecipeInstructions steps={recipe.steps} />
        </View>
      </ScrollView>
    </View>
  );
};
export default RecipeDetailScreen;

const styles = StyleSheet.create({
  container: { ...GlobalStyles.container, marginBottom: 24 },
  main: {
    flex: 1,
  },
  imageContainer: {
    aspectRatio: 16 / 10,
    position: "relative",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: 12,
    backgroundColor: GlobalValues.colors.white,
    borderRadius: 9999,
  },
  recipeInfo: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: GlobalValues.fonts.bold,
    color: "white",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 24,
  },
  statBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9999,
  },
  statText: {
    fontSize: 16,
    fontFamily: GlobalValues.fonts.bold,
    color: "white",
  },
  content: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  ctaContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  ctaCard: {
    backgroundColor: GlobalValues.colors.primary + "10",
    borderWidth: 1,
    borderColor: GlobalValues.colors.primary + "20",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 18,
    fontFamily: GlobalValues.fonts.bold,
    color: GlobalValues.colors.black,
    marginBottom: 8,
  },
  ctaDescription: {
    color: GlobalValues.grey[600],
    marginBottom: 16,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: GlobalValues.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 9999,
  },
  ctaButtonText: {
    color: "white",
    fontFamily: GlobalValues.fonts.bold,
  },
});
