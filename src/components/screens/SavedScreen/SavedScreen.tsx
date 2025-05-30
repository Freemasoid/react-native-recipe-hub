import { ExploreCard, Search } from "@/components/ui";
import type { Recipe } from "@/mock-data";
import { recipes } from "@/mock-data";
import { RootState } from "@/store/store";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

const SavedScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const favIds = useSelector((state: RootState) => state.favorites.recipeIds);
  const favorites = recipes.filter((recipe) => favIds.includes(recipe.id));

  const filteredRecipes = favorites.filter(
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Saved Recipes</Text>
        </View>

        <Search
          query={searchQuery}
          setQuery={setSearchQuery}
        />

        {favorites.length === 0 ? (
          <View style={styles.noFavoritesContainer}>
            <Text style={styles.noFavoritesText}>
              You don&apos;t have {"\n"}
              any saved recipes yet.
            </Text>
          </View>
        ) : (
          <View style={styles.recipesContainer}>
            <FlatList
              data={filteredRecipes as Recipe[]}
              showsVerticalScrollIndicator={false}
              renderItem={({
                item,
                index,
              }: {
                item: Recipe;
                index: number;
              }) => (
                <ExploreCard
                  item={item}
                  index={index}
                  onPress={() => handleRecipePress(item)}
                />
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default SavedScreen;
