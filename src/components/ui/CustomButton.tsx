import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    type?: 'primary' | 'secondary';
}

export default function CustomButton({
                                         title,
                                         onPress,
                                         isLoading = false,
                                         disabled = false,
                                         type = 'primary',
                                     }: CustomButtonProps) {
    const isPrimary = type === 'primary';
    const isDisabled = isLoading || disabled;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.85}
            className={`h-14 rounded-xl items-center justify-center flex-row shadow-sm mt-4 border-2
                ${
                isDisabled
                    ? 'bg-[#64748B]/20 border-[#64748B]/20'
                    : isPrimary
                        ? 'bg-[#00B3C7] border-[#00B3C7]'
                        : 'bg-transparent border-[#0B172A]'
            }`}  >
            {isLoading ? (
                <ActivityIndicator
                    color={
                        isDisabled
                            ? '#64748B'
                            : isPrimary
                                ? '#FFFFFF'
                                : '#0B172A'
                    } />
            ) : (
                <Text
                    className={`text-lg font-bold ${
                        isDisabled
                            ? 'text-[#64748B]'
                            : isPrimary
                                ? 'text-[#FFFFFF]'
                                : 'text-[#0B172A]'
                    }`}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}