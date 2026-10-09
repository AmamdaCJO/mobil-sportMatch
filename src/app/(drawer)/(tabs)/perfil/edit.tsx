import {ScrollView, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function EditPerfil() {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <ScrollView>
                <View>
                    <Text className="text-xl font-bold text-blue-500">
                        ¡Bienvenido a Editar perfil!
                    </Text>
                </View>
                <View>
                    <Text className="text-xl font-bold text-blue-500">
                        Foto de perfil
                    </Text>
                    <Text>Subir nueva foto de perfil</Text>
                </View>
                <View>
                    <Text className="text-xl font-bold text-blue-500">
                        Nombre Completo
                    </Text>
                    <TextInput className="rounded-lg border border-sky-300 px-4 py-3 text-sky-500"
                               placeholder="Nombre Completo"
                               value={fullName}
                               onChangeText={setFullName}/>
                </View>
                <View>
                    <Text className="text-xl font-bold text-blue-500">
                        Username
                    </Text>
                    <TextInput className="rounded-lg border border-sky-300 px-4 py-3 text-sky-500"
                               placeholder="username"
                               value={fullName}
                               onChangeText={setUserName}/>
                </View>
                <View>
                    <Text className="text-xl font-bold text-blue-500">
                        Correro electronico
                    </Text>
                    <TextInput className="rounded-lg border border-sky-300 px-4 py-3 text-sky-500"
                               placeholder="correro electronico"
                               value={fullName}
                               onChangeText={setEmail}/>
                </View>
            </ScrollView>
        </View>
    )
}