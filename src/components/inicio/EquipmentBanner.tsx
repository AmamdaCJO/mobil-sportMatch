import React from 'react';
import { View, Text, Image } from 'react-native';
import {colors} from "@/theme";

export default function EquipmentBanner() {
    return (
        <View
            className="mb-6 rounded-2xl overflow-hidden"
            style={{
                backgroundColor: colors.brand.blanco,
                borderWidth: 1,
                borderColor: colors.brand.grisHielo,
            }}
        >
            <View className="relative">
                <Image
                    source={require('../../../assets/images/basketball_playing_pics.webp')}
                    className="w-full h-40"
                    style={{ backgroundColor: colors.brand.grisHielo }}
                    resizeMode="cover"
                />

                <View
                    className="absolute top-3 left-3 flex-row items-center px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: colors.brand.rojo }}
                >
                    <View
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: colors.brand.blanco }}
                    />
                    <Text
                        className="text-xs font-bold"
                        style={{ color: colors.brand.blanco }}
                    >
                        LIVE
                    </Text>
                </View>
            </View>

            <View
                className="p-4"
                style={{ backgroundColor: colors.brand.navyPrincipal }}
            >
                <Text
                    className="text-lg font-bold"
                    style={{ color: colors.brand.blanco }}
                >
                    Equipamiento profesional
                </Text>
                <Text
                    className="text-sm mt-1"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                    Eleva tu rendimiento al siguiente nivel.
                </Text>
            </View>
        </View>
    );
}