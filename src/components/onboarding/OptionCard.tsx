import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Option = {
    id: string;
    titulo: string;
    icono: string;
};

type Props = {
    option: Option;
    selected: boolean;
    onPress: () => void;
};

export default function OptionCard({option, selected, onPress}: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center p-4 rounded-2xl mb-4 border-2 ${
                selected
                    ? 'border-[#00B3C7] bg-[#00B3C7]/5'
                    : 'border-[#F3F6F9] bg-[#FFFFFF]'
            }`}>
            <View
                className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${
                    selected ? 'bg-[#00B3C7]' : 'bg-[#F3F6F9]'
                }`}>
                <Ionicons
                    name={option.icono as any}
                    size={24}
                    color={selected ? '#FFFFFF' : '#64748B'}
                />
            </View>

            <Text
                className={`text-lg font-bold flex-1 ${
                    selected ? 'text-[#008298]' : 'text-[#0B172A]'
                }`}>
                {option.titulo}
            </Text>

            {selected && (
                <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color="#008298"
                />
            )}
        </TouchableOpacity>
    );
}