import Ionicons from '@expo/vector-icons/Ionicons';

export type IconName = keyof typeof Ionicons["glyphMap"]
export enum EColor {
    Red = "bg-red-500",
    Blue = "bg-blue-500",
    Green = "bg-green-500",
    Yellow = "bg-yellow-500",
    Orange = "bg-orange-500",
    Purple = "bg-purple-500",
    Gray = "bg-gray-500"
}