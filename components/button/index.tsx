import { Text, TouchableOpacity } from "react-native";
import { IconName } from "../../types";
import Ionicons from '@expo/vector-icons/Ionicons';

interface IProps {
    title: string;
    icon?: IconName
}

export default function Button({ title, icon }: IProps) {
    return (
        <TouchableOpacity className="flex w-fit flex-row items-center px-4">
            {icon && <Ionicons size={28} color="blue" name={icon} />}
            <Text className="w-fit block text-xl text-blue-500 p-2">
                {title}
            </Text>
        </TouchableOpacity>
    )
}