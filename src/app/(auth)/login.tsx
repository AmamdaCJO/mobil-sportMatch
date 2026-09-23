import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity} from 'react-native';
import React from "react";

export default function LoginScreen() {
    return (
        <SafeAreaView className="flex-1 bg-slate-50">
            <View>
                <Text className="text-3xl font-bold text-slate-900 mb-2">
                    Screeen Login
                </Text>
            </View>
        </SafeAreaView>
    );
}