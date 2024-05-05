import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomDrawer, { BottomDrawerMethods } from 'react-native-animated-bottom-drawer';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export interface IListData {
    icon: keyof typeof Ionicons["glyphMap"],
    title: string,
    value: number,
    color: string,
    last?: boolean,
    editable?: boolean
}

export default function ListFavItem({ icon, title, value, color, last, editable }: IListData) {
    const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

    return (
        <View className='flex flex-row gap-5 items-center pl-5'>
            <View className='flex flex-row items-center'>
                {editable &&
                    <BouncyCheckbox
                        onPress={(isChecked: boolean) => { }}
                        innerIconStyle={{ borderWidth: 2 }}
                    />
                }

                <View className={`p-2 rounded-full w-fit h-fit ${color}`}>
                    <Ionicons name={icon} size={24} color="white" />
                </View>
            </View>

            <View className={
                'flex flex-row items-center justify-between flex-grow border-gray-200 p-5 pl-0 ' +
                (!last ? "border-b" : "")}>
                <Text className='text-lg font-semibold w-fit font-mon'>{title}</Text>
                <View className='flex flex-row items-center'>
                    {editable
                        ? <TouchableOpacity>
                            <Ionicons name="menu-outline" size={24} color="gray" />
                        </TouchableOpacity>
                        : <>
                            <Text className='text-lg text-gray-400 font-mon'>{value}</Text>
                            <Ionicons name="chevron-forward" size={24} color="gray" />
                        </>}
                </View>
            </View>

            <BottomDrawer ref={bottomDrawerRef} openOnMount customStyles={{ container: { backgroundColor: "#F2F2F6" } }}>
                <View className='flex flex-row justify-center items-center my-3'>
                    <Text className='text-xl font-mon'>New Group</Text>
                </View>
                <View className='m-3 p-3 px-5 bg-white rounded-xl'>
                    <View className='py-3 border-b border-gray-200'>
                        <TextInput placeholder='Untitled' className='text-xl font-mon' />
                    </View>
                    <View className='flex flex-row justify-between items-center py-3'>
                        <Text className='font-mon text-lg'>Include</Text>
                        <Ionicons name='chevron-forward' size={20} color="gray" />
                    </View>
                </View>
            </BottomDrawer>
        </View>
    )
}