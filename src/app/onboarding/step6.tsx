import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../../components/ui/CustomButton';

export default function Step6Screen() {
    const [isLoading, setIsLoading] = useState(false);

    const resumenMocks = [
        { etiqueta: 'Actividad', valor: 'Hiking', icono: 'leaf' },
        { etiqueta: 'Nivel', valor: '3 - 4 Días por sem.', icono: 'calendar' },
        { etiqueta: 'Sesión', valor: '1 - 2 Horas', icono: 'time' }
    ];

    const handleFinalize = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.replace('/(drawer)/(tabs)/home');
        }, 2000);
    };

    return (
        <SafeAreaView className="flex-1 bg-[#07111F]">
            <View className="flex-1 px-6 pt-10 pb-6 justify-between">

                <View className="items-center mt-10">
                    <View className="w-24 h-24 bg-[#00B3C7]/20 rounded-full items-center justify-center mb-6">
                        <Ionicons name="checkmark-done" size={48} color="#00B3C7" />
                    </View>
                    <Text className="text-4xl font-bold text-[#FFFFFF] text-center mb-2">
                        ¡Perfil Listo!
                    </Text>
                    <Text className="text-lg text-[#00B3C7] text-center px-4">
                        Hemos personalizado tu experiencia en SportMatch.
                    </Text>
                </View>

                <View className="bg-[#FFFFFF] rounded-3xl p-6 shadow-lg mb-10 w-full">
                    <Text className="text-xl font-bold text-[#0B172A] mb-6 text-center">
                        Tu Resumen
                    </Text>

                    {resumenMocks.map((item, index) => (
                        <View
                            key={index}
                            className="flex-row items-center mb-5 border-b border-[#F3F6F9] pb-4"
                        >
                            <View className="w-10 h-10 bg-[#F3F6F9] rounded-full items-center justify-center mr-4">
                                <Ionicons
                                    name={item.icono as any}
                                    size={20}
                                    color="#008298"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="text-xs text-[#64748B] font-bold uppercase">
                                    {item.etiqueta}
                                </Text>
                                <Text className="text-base font-bold text-[#0B172A]">
                                    {item.valor}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                <CustomButton
                    title="Empezar a Explorar"
                    onPress={handleFinalize}
                    isLoading={isLoading}
                    type="primary"
                />
            </View>
        </SafeAreaView>
    );
}