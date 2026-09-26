import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { Feather } from '@react-native-vector-icons/feather';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

import Checkbox from '../../components/ui/Checkbox';
import Divider from '../../components/ui/Divider';
import InputField from '../../components/ui/InputField';
import LinkText from '../../components/ui/LinkText';
import PrimaryButton from '../../components/ui/PrimaryButton';
import ScreenHeader from '../../components/ui/ScreenHeader';
import SocialButtonsRow from '../../components/ui/SocialButtonsRow';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="flex-1 bg-black">
      {/* Fondo */}
      <Image
        source={require('../../../assets/images/LoginBg.webp')}
        className="absolute top-0 left-0 right-0 w-full h-[60%]"
        resizeMode="cover"
      />

      <View className="flex-1 items-center pt-[18%]">
        {/* Logo */}
        <Image
          source={require('../../../assets/images/Logo-SportMatch.webp')}
          className="w-[250px] h-[250px] mb-[30px]"
          resizeMode="contain"
        />

        {/* Cuadro blanco */}
        <View className="w-full flex-1 bg-white rounded-t-[10px] px-[25px] pt-[35px]">
          <ScreenHeader
            title="INICIAR SESIÓN"
            subtitle="Accede a tu cuenta para continuar"
          />

          {/* Input correo */}
          <InputField
            icon={<Feather name="mail" size={20} color="#666" />}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Input contraseña */}
          <InputField
            icon={<Feather name="lock" size={20} color="#666" />}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Recordarme / Olvidé contraseña */}
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

          {/* Botón principal */}
          <PrimaryButton
            label="Iniciar sesión"
            icon={<Feather name="arrow-right" size={18} color="#fff" />}
          />

          {/* Divisor */}
          <Divider text="o continúa con" />

          {/* Botones sociales */}
          <SocialButtonsRow
            googleIcon={<FontAwesome6 name="google" size={22} color="#000" iconStyle="brand" />}
            appleIcon={<FontAwesome6 name="apple" size={22} color="#000" iconStyle="brand" />}
          />

          {/* Registro */}
          <LinkText
            question="¿No tienes una cuenta?"
            actionText="Regístrate aquí"
            onPress={() => router.push('/register')}
          />
        </View>
      </View>
    </View>
  );
}