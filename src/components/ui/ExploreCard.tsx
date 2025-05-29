import type { Recipe } from "@/mock-data";
import { GlobalValues } from "@/styles";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FavoriteButton from "./FavoriteButton";
import StarRating from "./StarRating";

interface ExploreCardProps {
  item: Recipe;
  index: number;
  onPress: () => void;
}

const ExploreCard = ({ item, index, onPress }: ExploreCardProps) => {
  return (
    <View
      style={styles.recipeContainer}
      key={index}
    >
      <View style={styles.recipeContent}>
        <Pressable
          style={styles.cardPressableArea}
          onPress={onPress}
        >
          <Image
            source={
              typeof item.image === "string" ? { uri: item.image } : item.image
            }
            style={styles.recipeImage}
          />
          <View style={styles.recipeInfoContainer}>
            <View style={styles.recipeInfo}>
              <StarRating
                rating={item.rating}
                reviews={item.reviews}
                size={16}
              />

              <View style={styles.recipeInfoType}>
                <Text style={styles.recipeInfoRow}>{item.type}</Text>
                <Text style={styles.recipeInfoRow}>{item.prepTime}</Text>
              </View>
            </View>
          </View>

          <View style={styles.recipeTitleContainer}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.recipeInfoHeart}
          onPress={() => {
            console.log("Toggle save recipe:", item.id);
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <FavoriteButton
            size={32}
            recipeId={item.id}
          />
        </Pressable>
      </View>
    </View>
  );
};
export default ExploreCard;

const styles = StyleSheet.create({
  recipeContainer: {
    height: 150,
    borderWidth: 0.5,
    borderColor: GlobalValues.grey[400],
    borderRadius: 20,
    marginBottom: 16,
    marginLeft: 0,
    backgroundColor: GlobalValues.colors.white,
  },
  recipeContent: {
    flex: 1,
    position: "relative",
  },
  recipeImage: {
    flex: 1,
    width: "50%",
    borderColor: GlobalValues.colors.white,
    borderRadius: 16,
  },
  recipeInfoContainer: {
    flex: 1,
    borderWidth: 10,
    borderColor: "transparent",
    borderRadius: 20,
  },
  recipeInfo: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  recipeInfoRow: {
    fontFamily: GlobalValues.fonts.bold,
    fontSize: 16,
  },
  recipeInfoHeart: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  recipeInfoType: {
    marginTop: 4,
  },
  recipeTitleContainer: {
    position: "absolute",
    width: "70%",
    bottom: 0,
    right: 0,
    borderRadius: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontFamily: GlobalValues.fonts.black,
    backgroundColor: GlobalValues.colors.white,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    textAlign: "left",
    padding: 6,
  },
  cardPressableArea: {
    flex: 1,
    flexDirection: "row",
    position: "relative",
    width: "100%",
    borderWidth: 5,
    borderColor: GlobalValues.colors.white,
    borderRadius: 20,
  },
});
