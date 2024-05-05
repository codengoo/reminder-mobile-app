import { Text, TouchableOpacity } from "react-native";
import { IconName } from "../../types";
import Ionicons from '@expo/vector-icons/Ionicons';

interface IProps {
    title: string;
    icon?: IconName;
    background?: boolean;
    onPress?: () => void;
}

export default function Button({ title, icon, background = true, onPress }: IProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={"flex w-fit flex-row items-center px-2 rounded-full " +
                (background ? "bg-blue-500" : "")
            }>
            {icon && <Ionicons size={20} color="white" name={icon} />}
            <Text
                className={"w-fit block p-2 font-mon " +
                    (background ? "text-white" : "text-blue-500 text-lg")
                }>
                {title}
            </Text>
        </TouchableOpacity>
    )
}