import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

export interface IListData {
    icon: keyof typeof Ionicons["glyphMap"],
    title: string,
    value: number,
    color: string,
    last?: boolean
}

export default function ListFavItem({ icon, title, value, color, last }: IListData) {
    return (
        <View className='flex flex-row gap-5 items-center pl-5'>
            <View className={'p-2 rounded-full w-fit h-fit ' + color}>
                <Ionicons name={icon} size={24} color="white" />
            </View>

            <View className={
                'flex flex-row items-center justify-between flex-grow border-gray-200 p-5 pl-0 ' +
                (!last ? "border-b" : "")}>
                <Text className='text-lg font-semibold w-fit font-mon'>{title}</Text>
                <View className='flex flex-row items-center'>
                    <Text className='text-lg font-mon'>{value}</Text>
                    <Ionicons name="chevron-forward" size={24} color="gray" />
                </View>
            </View>
        </View>
    )
}