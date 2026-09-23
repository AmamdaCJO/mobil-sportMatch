import { Text, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                ¡Bienvenido a NativeWind con Expo!
            </Text>
            <Text className="text-xl font-bold text-red-500">
                Prueba o NativeWind con Expo!
            </Text>
        </View>
    );
}