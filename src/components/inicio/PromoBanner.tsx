import React from 'react';
import { View, Text, Image } from 'react-native';
import {colors} from "@/theme";

export default function PromoBanner() {
    return (
        <View className="mb-10">
            <Text
                className="text-lg font-bold mb-3"
                style={{ color: colors.ui.textPrimary }}
            >
                Promociones especiales
            </Text>

            <Image
                source={require('../../../assets/images/sales_descuento.webp')}
                className="w-full h-36 rounded-2xl"
                style={{ backgroundColor: colors.brand.grisHielo }}
                resizeMode="cover"
            />
        </View>
    );
}