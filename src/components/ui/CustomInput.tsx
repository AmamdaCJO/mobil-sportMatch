import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TextInputProps,
    Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
    label: string;
    error?: string;
    isPassword?: boolean;
}

export default function CustomInput({
                                        label,
                                        error,
                                        isPassword = false,
                                        ...props
                                    }: CustomInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="w-full">
            <Text className="mb-2 text-sm font-medium text-gray-700">
                {label}
            </Text>

            <View className="relative">
                <TextInput
                    {...props}
                    maxLength={isPassword ? 100 : 60}
                    secureTextEntry={isPassword && !showPassword}
                    className={`h-12 rounded-lg border px-4 pr-12 text-base text-gray-900 ${
                        error
                            ? 'border-red-500'
                            : 'border-gray-300'
                    }`}
                    placeholderTextColor="#9CA3AF"
                />

                {isPassword && (
                    <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-0 h-12 w-12 items-center justify-center"
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                            size={22}
                            color="#6B7280"
                        />
                    </Pressable>
                )}
            </View>

            {error && (
                <Text className="mt-1 text-sm text-red-500">
                    {error}
                </Text>
            )}
        </View>
    );
}
