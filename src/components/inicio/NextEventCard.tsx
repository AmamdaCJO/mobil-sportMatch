import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from "@/theme";

type Event = {
    id: string;
    titulo: string;
    dia: string;
    mes: string;
    hora: string;
    ciudad: string;
    imagen: string;
};

type Props = { event: Event };

export default function NextEventCard({ event }: Props) {
    return (
        <View
            className="mb-8 rounded-2xl p-5"
            style={{
                backgroundColor: colors.brand.blanco,
                borderWidth: 1,
                borderColor: colors.brand.grisHielo,
            }}
        >
            {/* Header */}
            <View
                className="flex-row justify-between items-center mb-4 pb-3"
                style={{
                    borderBottomWidth: 1,
                    borderColor: colors.brand.grisHielo,
                }}
            >
                <Text
                    className="text-lg font-bold"
                    style={{ color: colors.ui.textPrimary }}
                >
                    Tu evento próximo
                </Text>

                <View
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#FEF2F2' }}
                >
                    <Text
                        className="font-bold text-xs"
                        style={{ color: colors.brand.rojo }}
                    >
                        {event.dia} {event.mes}
                    </Text>
                </View>
            </View>

            {/* Imagen + título */}
            <Image
                source={{ uri: event.imagen }}
                className="w-full h-32 rounded-xl mb-4"
                style={{ backgroundColor: colors.brand.grisHielo }}
                resizeMode="cover"
            />

            <Text
                className="font-bold text-base mb-3"
                style={{ color: colors.ui.textPrimary }}
            >
                {event.titulo}
            </Text>

            {/* Hora + Ciudad */}
            <View className="flex-row items-center mb-4">
                <Ionicons name="time-outline" size={20} color={colors.status.neutral} />
                <Text className="ml-2 font-medium" style={{ color: colors.status.neutral }}>
                    {event.hora}
                </Text>

                <View
                    className="w-1 h-1 rounded-full mx-3"
                    style={{ backgroundColor: colors.status.neutral }}
                />

                <Ionicons name="location-outline" size={20} color={colors.status.neutral} />
                <Text className="ml-2 font-medium" style={{ color: colors.status.neutral }}>
                    {event.ciudad}
                </Text>
            </View>

            {/* Acciones */}
            <View className="flex-row justify-between gap-3">
                <TouchableOpacity
                    className="flex-1 py-2 rounded-xl items-center flex-row justify-center"
                    style={{
                        borderWidth: 2,
                        borderColor: colors.buttons.outlineBorder,
                    }}
                    accessibilityRole="button"
                >
                    <Ionicons
                        name="notifications-outline"
                        size={16}
                        color={colors.brand.navyPrincipal}
                    />
                    <Text
                        className="font-bold ml-1"
                        style={{ color: colors.brand.navyPrincipal }}
                    >
                        Recordarme
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-1 py-2 rounded-xl items-center"
                    style={{ backgroundColor: colors.buttons.primaryBg }}
                    accessibilityRole="button"
                >
                    <Text className="font-bold" style={{ color: colors.brand.blanco }}>
                        Ver Detalles
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}