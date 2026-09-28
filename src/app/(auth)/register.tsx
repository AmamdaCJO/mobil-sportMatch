import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { Feather } from '@react-native-vector-icons/feather';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

import ScreenHeader from '../../components/ui/ScreenHeader';
import InputField from '../../components/ui/InputField';
import Checkbox from '../../components/ui/Checkbox';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Divider from '../../components/ui/Divider';
import SocialButtonsRow from '../../components/ui/SocialButtonsRow';
import LinkText from '../../components/ui/LinkText';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <View className="flex-1 bg-black">
      {/* Mismo fondo que Login */}
      <Image
        source={require('../../../assets/images/LoginBg.webp')}
        className="absolute top-0 left-0 right-0 w-full h-[60%]"
        resizeMode="cover"
      />

      <View className="flex-1 items-center pt-[18%]">
        {/* Mismo logo que Login */}
        <Image
          source={require('../../../assets/images//Logo-SportMatch.webp')}
          className="w-[250px] h-[250px] mb-[30px]"
          resizeMode="contain"
        />

        {/* Cuadro blanco */}
        <View className="w-full flex-1 bg-white rounded-t-[10px] px-[25px] pt-[35px]">
          <ScreenHeader
            title="CREAR CUENTA"
            subtitle="Regístrate para comenzar"
          />

          {/* Nombre */}
          <InputField
            icon={<Feather name="user" size={20} color="#666" />}
            placeholder="Nombre completo"
            value={name}
            onChangeText={setName}
          />

          {/* Correo */}
          <InputField
            icon={<Feather name="mail" size={20} color="#666" />}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Contraseña */}
          <InputField
            icon={<Feather name="lock" size={20} color="#666" />}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Confirmar contraseña */}
          <InputField
            icon={<Feather name="lock" size={20} color="#666" />}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {/* Términos */}
          <View className="flex-row items-center mb-[25px]">
            <Checkbox
              label="Acepto los términos y condiciones"
              checked={acceptTerms}
              onToggle={() => setAcceptTerms(!acceptTerms)}
            />
          </View>

          {/* Botón principal */}
          <PrimaryButton
            label="Registrarme"
            icon={<Feather name="arrow-right" size={18} color="#fff" />}
          />

          {/* Divisor */}
          <Divider text="o regístrate con" />

          {/* Botones sociales */}
          <SocialButtonsRow
            googleIcon={<FontAwesome6 name="google" size={22} color="#000" iconStyle="brand" />}
            appleIcon={<FontAwesome6 name="apple" size={22} color="#000" iconStyle="brand" />}
          />

          {/* Login */}
          <LinkText
            question="¿Ya tienes una cuenta?"
            actionText="Inicia sesión aquí"
            onPress={() => router.push('/login')}
          />
        </View>
      </View>
    </View>
  );
}