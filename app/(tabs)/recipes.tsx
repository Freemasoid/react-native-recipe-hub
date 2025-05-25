import RecipesScreen from "@/components/screens/RecipesScreen";
import { GlobalStyles } from "@/styles";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Recipes = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[GlobalStyles.container, { paddingTop: insets.top }]}>
      <StatusBar
        style="dark"
        hidden={false}
      />
      <RecipesScreen />
    </View>
  );
};
export default Recipes;
