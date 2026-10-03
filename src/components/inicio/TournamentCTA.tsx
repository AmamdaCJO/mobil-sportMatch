import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {colors} from "@/theme";

export default function TournamentCTA() {
    return (
        <View className="mb-8">
            <Text
                className="text-xl font-bold mb-4"
                style={{ color: colors.ui.textPrimary }}
            >
                Inscríbete en torneos y ligas
            </Text>

            <View
                className="rounded-2xl p-4"
                style={{
                    backgroundColor: colors.brand.blanco,
                    borderWidth: 1,
                    borderColor: colors.brand.grisHielo,
                }}
            >
                <Image
                    source={require('../../../assets/images/couple_running.webp')}
                    className="w-full h-32 rounded-xl mb-4"
                    style={{ backgroundColor: colors.brand.grisHielo }}
                    resizeMode="cover"
                />

                <View className="flex-row gap-3">
                    <TouchableOpacity
                        className="flex-1 py-3 rounded-xl items-center"
                        style={{ backgroundColor: colors.buttons.secondaryBg }}
                        accessibilityRole="button"
                    >
                        <Text
                            className="font-bold"
                            style={{ color: colors.brand.blanco }}
                        >
                            Comprar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-1 py-3 rounded-xl items-center"
                        style={{ backgroundColor: colors.buttons.primaryBg }}
                        accessibilityRole="button"
                    >
                        <Text
                            className="font-bold"
                            style={{ color: colors.brand.blanco }}
                        >
                            Inscribirme
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}