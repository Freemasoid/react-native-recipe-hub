import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleFavorite } from "@/store/slices/favoritesSlice";
import { GlobalValues } from "@/styles";
import { Heart } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface FavoriteButtonProps {
  recipeId: number;
  size?: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  recipeId,
  size = 24,
}) => {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector((state) => state.favorites.recipeIds);
  const isFavorite = favoriteIds.includes(recipeId);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(recipeId));
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleToggleFavorite}
    >
      <Heart
        size={size}
        color={GlobalValues.colors.primary}
        fill={isFavorite ? GlobalValues.colors.primary : "transparent"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
});

export default FavoriteButton;
