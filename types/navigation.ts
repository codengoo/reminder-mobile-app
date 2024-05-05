import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    HomeScreen: {},
    CustomHomeScreen: undefined
}

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;