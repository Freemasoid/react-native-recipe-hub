import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  recipeIds: number[];
}

const initialState: FavoritesState = {
  recipeIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const recipeId = action.payload;
      const index = state.recipeIds.indexOf(recipeId);

      if (index !== -1) {
        state.recipeIds.splice(index, 1);
      } else {
        state.recipeIds.push(recipeId);
      }
    },

    clearAllFavorites: (state) => {
      state.recipeIds = [];
    },
  },
});

export const { toggleFavorite, clearAllFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
