import {ScrollView, Text, View} from "react-native";

export default function Configuracion() {
    return (
        <ScrollView className="flex-1 bg-white px-6 py-10">

            <View className="mb-6">
                <Text className="text-lg font-bold mb-3">
                    Ajustes de la cuenta
                </Text>

                <Text className="py-2">Información de la cuenta</Text>
                <Text className="py-2">Privacidad y seguridad</Text>
                <Text className="py-2">Notificaciones</Text>
                <Text className="py-2">Preferencias</Text>
                <Text className="py-2">Idioma</Text>
            </View>

            <View className="mb-6">
                <Text className="text-lg font-bold mb-3">
                    Asistencia
                </Text>

                <Text className="py-2">Preguntas y respuestas</Text>
                <Text className="py-2">Conectar a un asistente</Text>
                <Text className="py-2">Valorar la app</Text>
            </View>

            <View className="mb-6">
                <Text className="text-lg font-bold mb-3">
                    Información legal
                </Text>

                <Text className="py-2">Términos de servicio</Text>
                <Text className="py-2">Política de privacidad</Text>
            </View>
        </ScrollView>

    );
}