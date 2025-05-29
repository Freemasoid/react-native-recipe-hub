import { RecipeDetailScreen } from "@/components/screens/RecipeDetailScreen";
import { recipes, type Recipe } from "@/mock-data";
import { GlobalStyles } from "@/styles";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";

const RecipeDetail = () => {
  const { id } = useLocalSearchParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  useEffect(() => {
    if (!recipe) {
      router.replace("/+not-found");
    }
  }, [recipe]);

  if (!recipe) {
    return <View style={GlobalStyles.container} />;
  }

  return (
    <View style={[GlobalStyles.container]}>
      <StatusBar
        style="light"
        hidden={false}
      />
      <RecipeDetailScreen recipe={recipe as Recipe} />
    </View>
  );
};

export default RecipeDetail;
