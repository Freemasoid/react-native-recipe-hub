import { RecipeDetailScreen } from "@/components/screens/RecipeDetailScreen";
import type { Recipe } from "@/mock-data";
import { recipes } from "@/mock-data";
import { GlobalStyles } from "@/styles";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RecipeDetail = () => {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) {
    return (
      <View
        style={[
          GlobalStyles.container,
          {
            paddingTop: insets.top,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text>Recipe not found</Text>
      </View>
    );
  }

  return (
    <View style={[GlobalStyles.container, { paddingTop: insets.top }]}>
      <RecipeDetailScreen recipe={recipe as Recipe} />
    </View>
  );
};
export default RecipeDetail;
