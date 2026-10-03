import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, View, Text } from 'react-native';

import { Feather } from '@react-native-vector-icons/feather';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

import ScreenHeader from '../../components/ui/ScreenHeader';
import TextInput from '../../components/ui/Inputs/TextInput';
import PasswordInput from '../../components/ui/Inputs/PasswordInput';
import Checkbox from '../../components/ui/CheckBox/Checkbox';
import PrimaryButton from '../../components/ui/Buttons/PrimaryButton';
import Divider from '../../components/ui/Divider';
import SocialButtonsRow from '../../components/ui/Buttons/SocialButtonsRow';
import LinkText from '../../components/ui/Links/LinkText';

import { authService } from '../../services/(auth)/authService';
import { storage } from '../../services/(auth)/storage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert('Campos incompletos', 'Ingresa correo y contraseña.');
      return;
    }

    try {
      setLoading(true);

      const { access_token, usuario } = await authService.login({
        correo: email.trim().toLowerCase(),
        password,
      });

      await storage.guardarSesion(access_token, usuario);

      router.replace('/perfil');
    } catch (error: any) {
      Alert.alert('Error al iniciar sesión', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-black">
      <Image
        source={require('../../../assets/images/LoginBg.webp')}
        className="absolute top-0 left-0 right-0 w-full h-[60%]"
        resizeMode="cover"
      />

      <View className="flex-1 items-center pt-[18%]">
        <Image
          source={require('../../../assets/images/Logo-SportMatch.webp')}
          className="w-[250px] h-[250px] mb-[30px]"
          resizeMode="contain"
        />

        <View className="w-full flex-1 bg-white rounded-t-[10px] px-[25px] pt-[35px]">
          <ScreenHeader
            title="INICIAR SESIÓN"
            subtitle="Accede a tu cuenta para continuar"
          />

          {/* Correo */}
          <TextInput
            icon={<Feather name="mail" size={20} color="#666" />}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Contraseña */}
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
          />

          {/* Recordarme */}
          <View className="flex-row justify-between items-center mb-[25px]">
            <Checkbox
              label="Recordarme"
              checked={rememberMe}
              onToggle={() => setRememberMe(!rememberMe)}
            />
            <Text className="text-[13px] text-[#3ad5ec] font-semibold">
              ¿Olvidaste tu contraseña?
            </Text>
          </View>

          {/* Botón */}
          <PrimaryButton
            label={loading ? 'Iniciando...' : 'Iniciar sesión'}
            icon={
              loading ? undefined : (
                <Feather name="arrow-right" size={18} color="#fff" />
              )
            }
            onPress={handleLogin}
            disabled={loading}
          />

          <Divider text="o continúa con" />

          <SocialButtonsRow
            googleIcon={
              <FontAwesome6 name="google" size={22} color="#000" iconStyle="brand" />
            }
            appleIcon={
              <FontAwesome6 name="apple" size={22} color="#000" iconStyle="brand" />
            }
          />

          <LinkText
            question="¿No tienes una cuenta?"
            actionText="Regístrate aquí"
            onPress={() => router.push('/(auth)/register')}
          />
        </View>
      </View>
    </View>
  );
}