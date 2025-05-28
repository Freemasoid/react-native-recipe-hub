import { Button, Header } from "@/components/ui";
import { recipes, type Recipe } from "@/mock-data";
import { GlobalValues } from "@/styles";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { styles } from "./styles";

const RecipesScreen = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const [daytime, setDaytime] = useState<"breakfast" | "lunch" | "dinner">(
    "breakfast"
  );
  const [daytimeRecipes, setDaytimeRecipes] = useState<Recipe[]>([]);

  const mostPopular = recipes.filter((recipe) => recipe.mostPopular);
  const recipesByDaytime = recipes.filter(
    (recipe) => recipe.type.toLowerCase() === daytime
  ) as Recipe[];

  const handleRecipePress = (recipe: Recipe) => {
    router.push(`/recipe/${recipe.id}`);
  };

  useEffect(() => {
    setDaytimeRecipes(recipesByDaytime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daytime]);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const COUNT = 2.5;
  const RECIPES_COUNT = 1.8;

  const ITEM_WIDTH = width / COUNT;
  const RECIPES_WIDTH = width / RECIPES_COUNT;

  // this is workaraound to make carousel work properly
  const POPULAR_MARGIN = width * 0.4;
  const RECIPES_MARGIN = width * 0.55;

  const getAlternatingColor = (index: number) => {
    return index % 2 === 0
      ? GlobalValues.colors.yellow
      : GlobalValues.colors.green;
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.sectionMostPopular}>
        <Text style={styles.sectionTitle}>Most Popular</Text>

        <View style={styles.carouselContainer}>
          <Carousel
            loop
            vertical={false}
            ref={ref}
            width={ITEM_WIDTH}
            height={width / 4}
            style={{
              width: width,
              overflow: "visible",
              marginLeft: POPULAR_MARGIN,
            }}
            data={mostPopular}
            renderItem={({ item }) => (
              <Pressable
                style={styles.popularContainer}
                onPress={() => handleRecipePress(item as Recipe)}
              >
                <Image
                  source={
                    typeof item.image === "string"
                      ? { uri: item.image }
                      : item.image
                  }
                  style={styles.popularImage}
                />
                <View style={styles.popularTitleContainer}>
                  <Text style={styles.popularTitle}>{item.title}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>

      <View style={styles.sectionChooseYourFood}>
        <Text style={styles.sectionTitle}>Choose your food</Text>
        <View
          style={[
            styles.categoryButtons,
            {
              width: width - 48, // Accounting for parent's paddingHorizontal (24px on each side)
            },
          ]}
        >
          <Button
            variant={
              daytime === "breakfast" ? "selectionActive" : "selectionInactive"
            }
            onPress={() => {
              setDaytime("breakfast");
            }}
            style={{ width: (width - 48 - 16) / 3 }} // Width minus padding minus spacing between buttons
          >
            Breakfast
          </Button>
          <Button
            variant={
              daytime === "lunch" ? "selectionActive" : "selectionInactive"
            }
            onPress={() => {
              setDaytime("lunch");
            }}
            style={{ width: (width - 48 - 16) / 3 }}
          >
            Lunch
          </Button>
          <Button
            variant={
              daytime === "dinner" ? "selectionActive" : "selectionInactive"
            }
            onPress={() => {
              setDaytime("dinner");
            }}
            style={{ width: (width - 48 - 16) / 3 }}
          >
            Dinner
          </Button>
        </View>

        <View style={styles.carouselContainer}>
          <Carousel
            loop
            vertical={false}
            ref={ref}
            width={RECIPES_WIDTH}
            height={height / 3}
            style={{
              width: width,
              overflow: "visible",
              marginLeft: RECIPES_MARGIN,
            }}
            data={daytimeRecipes}
            renderItem={({ item, index }) => (
              <View style={styles.recipeContainer}>
                <Pressable
                  style={[
                    styles.recipeContent,
                    { backgroundColor: getAlternatingColor(index) },
                  ]}
                  onPress={() => handleRecipePress(item as Recipe)}
                >
                  <Image
                    source={
                      typeof item.image === "string"
                        ? { uri: item.image }
                        : item.image
                    }
                    style={[
                      styles.recipeImage,
                      { borderColor: getAlternatingColor(index) },
                    ]}
                  />
                  <View style={styles.recipeTitleContainer}>
                    <Text style={styles.recipeTitle}>{item.title}</Text>
                  </View>
                </Pressable>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default RecipesScreen;
