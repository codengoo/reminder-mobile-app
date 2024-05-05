import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { EColor, IconName } from "../../types";

interface IProps {
    title: string,
    iconName: IconName
    value: number
    color: EColor,
}

export default function InfoBox({ title, iconName, value, color }: IProps) {

    return (
        <View
            className="bg-white rounded-2xl flex-1 p-5"
            style={{ flexBasis: 150 }}
        >
            <View className="flex flex-row justify-between mb-3">
                <View
                    className={
                        "flex justify-center items-center p-2 rounded-full " +
                        color}>
                    <Ionicons name={iconName} size={24} color="white" />
                </View>
                <Text className="text-3xl font-bold font-mon">{value}</Text>
            </View>
            <Text className="text-gray-400 font-semibold text-xl font-mon">{title}</Text>
        </View>
    )
}