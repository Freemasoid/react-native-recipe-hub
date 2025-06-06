import { ExploreCard, Search } from "@/components/ui";
import type { Recipe } from "@/mock-data";
import { recipes } from "@/mock-data";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";

const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecipePress = (recipe: Recipe) => {
    router.push(`/recipe/${recipe.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore Food</Text>
      </View>

      <Search
        query={searchQuery}
        setQuery={setSearchQuery}
      />

      <View style={styles.recipesContainer}>
        <FlatList
          data={filteredRecipes as Recipe[]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: { item: Recipe; index: number }) => (
            <ExploreCard
              item={item}
              index={index}
              onPress={() => handleRecipePress(item)}
            />
          )}
        />
      </View>
    </View>
  );
};
export default ExploreScreen;
