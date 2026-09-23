import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../ui/CustomButton';

type Props = {
    step: number;
    total: number;
    title: string;
    subtitle?: string;
    onNext: () => void;
    nextDisabled?: boolean;
    children: React.ReactNode;
};

export default function OnboardingStepLayout({
                                                 step,
                                                 total,
                                                 title,
                                                 subtitle,
                                                 onNext,
                                                 nextDisabled,
                                                 children,
                                             }: Props) {
    const progress = (step / total) * 100;

    return (
        <SafeAreaView className="flex-1 bg-[#F3F6F9]">
            <View className="flex-1 px-6 pt-10 pb-6">

                <View className="flex-row items-center mb-8">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <Ionicons name="arrow-back" size={24} color="#0B172A" />
                    </TouchableOpacity>

                    <View className="flex-1 h-2 bg-[#FFFFFF] rounded-full overflow-hidden">
                        <View
                            className="h-full bg-[#00B3C7]"
                            style={{ width: `${progress}%` }}
                        />
                    </View>

                    <Text className="text-[#64748B] font-bold ml-4 text-xs">
                        {step}/{total}
                    </Text>
                </View>

                <Text className="text-3xl font-bold text-[#0B172A] mb-2 text-center">
                    {title}
                </Text>

                {subtitle && (
                    <Text className="text-base text-[#64748B] mb-8 text-center">
                        {subtitle}
                    </Text>
                )}

                <View className="flex-1">{children}</View>

                <CustomButton
                    title="Continuar"
                    onPress={onNext}
                    disabled={nextDisabled}
                />
            </View>
        </SafeAreaView>
    );
}