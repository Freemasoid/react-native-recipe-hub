import { ExploreScreen } from "@/components/screens/Explore";
import { GlobalStyles } from "@/styles";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Explore = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[GlobalStyles.container, { paddingTop: insets.top }]}>
      <ExploreScreen />
    </View>
  );
};
export default Explore;
