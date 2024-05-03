import { FlatList, ScrollView, Text, View } from "react-native";
import Input from "../../components/input";
import InfoBox from "../../components/info_box";
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

export default function HomeScreen() {
    return (
        <ScrollView
            className="px-4"
            showsVerticalScrollIndicator={false}>
            <View className="mb-10">
                <View className="flex flex-row justify-end w-fu">
                    <Button title="Edit" />
                </View>
                <Input />
            </View>

            <View
                className="flex flex-row flex-wrap mb-10"
                style={{ gap: 10 }}>
                <InfoBox title="Today" value={0} iconName="calendar-number" color={EColor.Blue} />
                <InfoBox title="Scheduled" value={0} iconName="calendar" color={EColor.Red} />
                <InfoBox title="All" value={12} iconName="folder-open" color={EColor.Gray} />
                <InfoBox title="Flagged" value={0} iconName="flag" color={EColor.Yellow} />
            </View>

            <View>
                <View className="flex flex-row justify-between">
                    <Text className="text-3xl font-semibold ml-4 mb-4 font-mon">My Lists</Text>
                    <Button title="Add" icon={"add-circle-outline"} />
                </View>
                <FlatList
                    data={data}
                    className="bg-white rounded-xl"
                    renderItem={({ item, index }) =>
                        <ListFavItem
                            title={item.title}
                            color={item.color}
                            icon={item.icon}
                            value={10}
                            last={index === data.length - 1}
                        />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ScrollView>
    )
}