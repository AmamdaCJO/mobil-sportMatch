import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity} from 'react-native';
import {router} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../../components/ui/CustomButton';

export default function Step1Screen() {
    const [seleccion, setSeleccion] = useState<string | null>(null);

    const opciones = [
        {id: 'running', titulo: 'Running / Atletismo', icono: 'walk'},
        {id: 'hiking', titulo: 'Hiking / Senderismo', icono: 'leaf'},
        {id: 'ciclismo', titulo: 'Ciclismo', icono: 'bicycle'},
        {id: 'Natacion', titulo: 'Natación', icono: 'water-outline'},
        {id: 'Caminata', titulo: 'Caminata Ligera', icono: 'footsteps'},
    ];

    const handleNext = () => {
        router.push('/onboarding/step2');
    };

    return (
        <SafeAreaView className="flex-1 bg-slate-50">
            <View className="flex-1 px-6 pt-10 pb-6">
                {/*Seccion de la barra de progreso*/}
                <View className="flex-row items-center mb-8">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <Ionicons name="arrow-back" size={24} color="#0F172A"/>
                    </TouchableOpacity>
                    <View className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <View className="h-full bg-[#0D5C3B] w-1/6"/>
                    </View>
                    <Text className="text-slate-500 font-bold ml-4 text-xs">1/6</Text>
                </View>

                {/*Seccion de titulos*/}
                <Text className="text-3xl font-bold text-slate-900 mb-2 text-center">¿Qué actividad principal te
                    apasiona?</Text>
                <Text className="text-base text-slate-500 mb-8">
                    Esto nos ayudará a recomendarte los mejores eventos y rutas cercanas.
                </Text>

                <View className="flex-1">
                    {opciones.map((opcion) => {
                        const isSelected = seleccion === opcion.id;
                        return (
                            <TouchableOpacity
                                key={opcion.id}
                                onPress={() => setSeleccion(opcion.id)}
                                className={`flex-row items-center p-4 rounded-2xl mb-4 border-2 
                  ${isSelected ? 'border-[#0D5C3B] bg-[#0D5C3B]/5' : 'border-slate-200 bg-white'}`}
                            >
                                <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 
                  ${isSelected ? 'bg-[#0D5C3B]' : 'bg-slate-100'}`}>
                                    <Ionicons name={opcion.icono as any} size={24}
                                              color={isSelected ? 'white' : '#64748B'}/>
                                </View>
                                <Text
                                    className={`text-lg font-bold flex-1 ${isSelected ? 'text-[#0D5C3B]' : 'text-slate-700'}`}>
                                    {opcion.titulo}
                                </Text>
                                {isSelected && <Ionicons name="checkmark-circle" size={24} color="#0D5C3B"/>}
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <CustomButton
                    title="Continuar"
                    onPress={handleNext}
                    disabled={!seleccion}
                />
            </View>
        </SafeAreaView>
    );
}