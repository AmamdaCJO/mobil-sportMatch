import React, { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import AuthScreenLayout from '../../components/auth/AuthScreenLayout';
import CustomButton from '../../components/ui/CustomButton';
import CustomInput from '../../components/ui/CustomInput';

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('');

    return (
        <AuthScreenLayout
            title="¿Olvidaste tu contraseña?"
            subtitle="Te enviaremos un código para restablecerla."
        >
            <CustomInput
                label="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="tucorreo@ejemplo.com"
            />

            <View className="mt-8">
                <CustomButton
                    title="Enviar código"
                    onPress={() => router.push('/auth/verify-code')}
                    disabled={!email.includes('@')}
                />
            </View>
        </AuthScreenLayout>
    );
}