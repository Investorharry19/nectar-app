import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [loaded, error] = useFonts({
    "Gilroy-Light": require("@/assets/fonts/Gilroy-Light.ttf"),
    "Gilroy-Regular": require("@/assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-Medium": require("@/assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Bold": require("@/assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Heavy": require("@/assets/fonts/Gilroy-Heavy.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
