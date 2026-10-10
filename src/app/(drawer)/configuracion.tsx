import { Text, View } from "react-native";

export default function Configuracion() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-blue-500">
                ¡Bienvenido a Configuración!
            </Text>
            <Text className="text-xl font-bold text-blue-500">
                Informacion de la cuensta
            </Text>
            <Text className="text-xl font-bold text-blue-500">
               Privasidad y segurifasf
            </Text>
            <Text className="text-xl font-bold text-blue-500">
                ¡Notificonaciones!
            </Text>
            <Text className="text-xl font-bold text-blue-500">
                ¡Preerecniasd!
            </Text>
            <Text className="text-xl font-bold text-blue-500">
                Idioma
            </Text>
        </View>
    );
}