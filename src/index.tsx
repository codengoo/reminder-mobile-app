import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/navigation";
import HomeScreen from "./screens/home";
import CustomHome from "./screens/custom_home";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    fullScreenGestureEnabled: true
                }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CustomHomeScreen" component={CustomHome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}