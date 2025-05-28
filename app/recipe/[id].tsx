import { RecipeDetailScreen } from "@/components/screens/RecipeDetailScreen";
import { recipes, type Recipe } from "@/mock-data";
import { GlobalStyles } from "@/styles";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RecipeDetail = () => {
  const insets = useSafeAreaInsets();
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
    <View style={[GlobalStyles.container, { paddingTop: insets.top }]}>
      <RecipeDetailScreen recipe={recipe as Recipe} />
    </View>
  );
};

export default RecipeDetail;
