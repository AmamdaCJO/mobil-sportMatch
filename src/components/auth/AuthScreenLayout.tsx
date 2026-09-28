import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import {router} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    title: string;
    subtitle?: string;
    showBack?: boolean;
    children: React.ReactNode;
};

export default function AuthScreenLayout({
                                             title,
                                             subtitle,
                                             showBack = true,
                                             children,
                                         }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-slate-50">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView
                    contentContainerStyle={{flexGrow: 1}}
                    keyboardShouldPersistTaps="handled" >
                    <View className="flex-1 w-full items-center justify-center px-6 md:justify-start md:pt-12">
                        <View className="w-full max-w-3xl">
                            {showBack && (
                                <TouchableOpacity
                                    onPress={() => router.back()}
                                    className="mb-6 h-10 w-10 items-center justify-center rounded-full bg-white"
                                >
                                    <Ionicons
                                        name="arrow-back"
                                        size={22}
                                        color="#0F172A"
                                    />
                                </TouchableOpacity>
                            )}

                            <Text className="mb-2 text-3xl font-bold text-slate-900">
                                {title}
                            </Text>

                            {subtitle && (
                                <Text className="mb-8 text-base text-slate-500">
                                    {subtitle}
                                </Text>
                            )}

                            <View>
                                {children}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}