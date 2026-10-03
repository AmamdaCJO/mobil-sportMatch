import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import {CATEGORIAS_EVENTOS, MOCK_RUTAS_RECOMENDADAS} from '../../mocks';

export default function RecommendedRoutes() {
    return (
        <View className="mb-8">
            <Text
                className="text-xl font-bold mb-3"
                style={{ color: colors.ui.textPrimary }}
            >
                Eventos disponibles
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-4"
            >
                {CATEGORIAS_EVENTOS.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        className="px-5 py-2 rounded-full mr-3"
                        style={{
                            backgroundColor: colors.brand.blanco,
                            borderWidth: 1,
                            borderColor: colors.buttons.outlineBorder,
                        }}
                        accessibilityRole="button"
                    >
                        <Text
                            className="font-semibold"
                            style={{ color: colors.brand.navyPrincipal }}
                        >
                            {cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {MOCK_RUTAS_RECOMENDADAS.map((ruta) => (
                    <TouchableOpacity
                        key={ruta.id}
                        className="mr-3 rounded-2xl overflow-hidden"
                        style={{
                            width: 200,
                            backgroundColor: colors.brand.blanco,
                            borderWidth: 1,
                            borderColor: colors.brand.grisHielo,
                        }}
                        accessibilityRole="button"
                    >
                        <Image
                            source={{ uri: ruta.imagen }}
                            className="w-full h-28"
                            style={{ backgroundColor: colors.brand.grisHielo }}
                            resizeMode="cover"
                        />

                        <View className="p-3">
                            <Text
                                className="font-bold"
                                style={{ color: colors.ui.textPrimary }}
                            >
                                {ruta.titulo}
                            </Text>

                            <View className="flex-row items-center mt-1">
                                <Ionicons
                                    name="trending-up-outline"
                                    size={14}
                                    color={colors.status.neutral}
                                />
                                <Text
                                    className="text-xs ml-1"
                                    style={{ color: colors.status.neutral }}
                                >
                                    {ruta.nivel}
                                </Text>

                                <View
                                    className="w-1 h-1 rounded-full mx-2"
                                    style={{ backgroundColor: colors.status.neutral }}
                                />

                                <Ionicons
                                    name="walk-outline"
                                    size={14}
                                    color={colors.status.neutral}
                                />
                                <Text
                                    className="text-xs ml-1"
                                    style={{ color: colors.status.neutral }}
                                >
                                    {ruta.distancia} km
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}