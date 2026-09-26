import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {router} from 'expo-router';
import AuthScreenLayout from '../../components/auth/AuthScreenLayout';
import CustomButton from '../../components/ui/CustomButton';
import CustomInput from "@/components/ui/CustomInput";

export default function ResetPasswordScreen() {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const isValid = password.length >= 6 && password === confirm;

    const handleReset = () => {
        router.replace('/auth/login');
    };

    return (
        <AuthScreenLayout
            title="Nueva contraseña"
            subtitle="Ingresa tu nueva contraseña para recuperar el acceso a tu cuenta.">
            <View className="gap-4">
                <CustomInput
                    label="Nueva contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    isPassword
                    placeholder="••••••••"
                />
                <CustomInput
                    label="Confirmar contraseña"
                    value={confirm}
                    onChangeText={setConfirm}
                    isPassword
                    placeholder="••••••••"
                />

                //Si la contraseña en diferente
                {confirm.length > 0 && password !== confirm &&
                    (
                        <Text className="text-red-500 text-sm mt-1">
                            Las contraseñas no coinciden.
                        </Text>
                    )
                }
                //Si la contraseña es igual
                {
                    confirm.length > 0 && password === confirm &&
                    (
                        <Text className="text-green-500 text-sm mt-1">
                            Las contraseñas coinciden.
                        </Text>
                    )
                }

            </View>

            <View className="mt-8">
                <CustomButton
                    title="Restablecer contraseña"
                    onPress={handleReset}
                    disabled={!isValid}
                />
            </View>
        </AuthScreenLayout>
    );
}