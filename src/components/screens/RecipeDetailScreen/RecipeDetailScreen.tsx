import {
  IngredientList,
  RecipeDescription,
  RecipeInstructions,
} from "@/components";
import type { Recipe } from "@/mock-data";
import { GlobalValues } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ArrowLeft, Clock, Star } from "lucide-react-native";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import styles from "./styles";

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
