import { ScrollView, Text, View } from "react-native";
import Input from "../../components/input";
import Button from "../../components/button";
import ListFavItem, { IListData } from "../../components/list_fav";
import { EColor } from "../../types";

const data: IListData[] = [
    {
        icon: "add",
        title: "Gym Target",
        value: 0,
        color: EColor.Red
    },
    {
        icon: "add",
        title: "Gym Target",
        value: 0,
        color: EColor.Yellow
    },
    {
        icon: "add",
        title: "Gym Target",
        value: 0,
        color: EColor.Red
    },
    {
        icon: "add",
        title: "Gym Target",
        value: 0,
        color: EColor.Red
    },
    {
        icon: "add",
        title: "Gym Target",
        value: 0,
        color: EColor.Blue
    },
]

export default function CustomHome() {
    return (
        <ScrollView className="" showsVerticalScrollIndicator={false}>
            <View className="flex flex-row justify-end">
                <Button title="Done" background={false} />
            </View>
            <View className="mb-10 mt-2 flex flex-row items-center">
                <Input />
            </View>

            <View className="bg-white rounded-xl mb-5">
                {data.map((item, index) =>
                    <ListFavItem
                        title={item.title}
                        color={item.color}
                        icon={item.icon}
                        value={10}
                        last={index === data.length - 1}
                        key={index.toString()}
                        editable
                    />)}
            </View>

            <View>
                <View className="flex flex-row justify-between items-center mb-4">
                    <Text className="text-2xl font-semibold ml-4 font-mon">My list</Text>
                </View>

                <View className="bg-white rounded-xl">
                    {data.map((item, index) =>
                        <ListFavItem
                            title={item.title}
                            color={item.color}
                            icon={item.icon}
                            value={10}
                            last={index === data.length - 1}
                            key={index.toString()}
                        />)}
                </View>

            </View>
        </ScrollView>
    )
}