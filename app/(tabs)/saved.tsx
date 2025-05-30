import { SavedScreen } from "@/components/screens/SavedScreen";
import { GlobalStyles } from "@/styles";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Saved = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[GlobalStyles.container, { paddingTop: insets.top }]}>
      <SavedScreen />
    </View>
  );
};
export default Saved;
