import { FlatList, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import Input from "../../components/input";
import InfoBox from "../../components/info_box";
import Button from "../../components/button";
import ListFavItem, { IListData } from "../../components/list_fav";
import { EColor } from "../../types";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../../types/navigation";

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

export default function HomeScreen({ navigation }: ScreenProps<"HomeScreen">) {
  const [showEditBtn, setShowEditBtn] = useState<boolean>(false);

  function onShowEditBtn() {
    setShowEditBtn(true);
  }

  function handleOptionPress() {
    console.log("Hello world")
    navigation.navigate("CustomHomeScreen")
  }

  return (
    <SafeAreaView>
      <ScrollView
        className="px-4"
        showsVerticalScrollIndicator={false}>
        <View className="mb-10 mt-2 flex flex-row items-center">
          <Input />
          <TouchableOpacity className="p-2 ml-2 flex-none" onPress={handleOptionPress}>
            <Ionicons name="settings-outline" color="gray" size={24} />
          </TouchableOpacity>
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
          <View className="flex flex-row justify-between items-center mb-4">
            <Text className="text-2xl font-semibold ml-4 font-mon">My list</Text>
            <Button title="Add" icon={"add-circle-outline"} />
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
      </ScrollView >
    </SafeAreaView>

  )
}