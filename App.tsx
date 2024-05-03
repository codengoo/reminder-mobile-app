import { SafeAreaView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat': require('./assets/fonts/MontserratAlternates-Medium.ttf'),
  });

  useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView className="bg-gray-100 h-full w-full">

    </SafeAreaView>
  );
}



