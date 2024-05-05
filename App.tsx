import * as font from '@expo-google-fonts/poppins';
import RootApp from "./src";
const { useFonts, __metadata__, ...rest } = font

export default function App() {
  const [fontsLoaded] = useFonts({ ...rest });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootApp />
  );
}



