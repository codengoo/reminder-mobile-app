import { TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Input() {
    return (
        <View className="bg-gray-200 rounded-lg flex-grow flex flex-row space-x-2 overflow-hidden px-2">
            <View className="py-2 flex-none">
                <Ionicons name="search" size={24} color="gray" />
            </View>
            <TextInput className="font-mon w-3/4" placeholder="Search" />
        </View>
    )
}