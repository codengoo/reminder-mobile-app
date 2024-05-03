import { TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Input() {
    return (
        <View className="bg-gray-200 rounded-lg w-full flex flex-row space-x-2 overflow-hidden px-2">
            <View className="py-2">
                <Ionicons name="search" size={24} color="gray" />
            </View>
            <TextInput className="w-full" placeholder="Search" />
        </View>
    )
}