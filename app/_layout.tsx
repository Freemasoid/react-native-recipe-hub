import { persistor, store } from "@/store/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("../assets/fonts/Lato-BlackItalic.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("../assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("../assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("../assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("../assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("../assets/fonts/Lato-ThinItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <View
          style={{ flex: 1 }}
          onLayout={onLayoutRootView}
        >
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </PersistGate>
    </Provider>
  );
}
