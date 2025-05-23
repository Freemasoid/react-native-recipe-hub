import { recipes } from "@/mock-data";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./HomeScreen.styles";

export const HomeScreen = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query.toLowerCase())
        )
    );

    setFilteredRecipes(filteredRecipes);
  };

  // use Link for dynamic routing
  // <Link href={{
  //   pathname: "/categories/[id]",
  //   params: { id: categoryId },
  // }}></Link>

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};
