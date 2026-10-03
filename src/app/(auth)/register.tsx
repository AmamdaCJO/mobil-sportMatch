import { View, Image, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { Feather } from '@react-native-vector-icons/feather';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

import ScreenHeader from '../../components/ui/ScreenHeader';
import TextInput from '../../components/ui/Inputs/TextInput';
import PasswordInput from '../../components/ui/Inputs/PasswordInput';
import DateInput from '../../components/ui/Inputs/DateInput';
import SelectInput from '../../components/ui/Selects/SelectInput';
import Checkbox from '../../components/ui/CheckBox/Checkbox';
import PrimaryButton from '../../components/ui/Buttons/PrimaryButton';
import Divider from '../../components/ui/Divider';
import SocialButtonsRow from '../../components/ui/Buttons/SocialButtonsRow';
import LinkText from '../../components/ui/Links/LinkText';

import { authService } from '../../services/(auth)/authService';
import { storage } from '../../services/(auth)/storage';

export default function Register() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Paso 1
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState<Date | null>(null);
  const [sexo, setSexo] = useState('');

  // Paso 2
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  // ---------- Validaciones ----------
  const validarPaso1 = () => {
    if (!nombreCompleto.trim() || !nombreUsuario.trim() || !correo.trim()) {
      Alert.alert('Campos incompletos', 'Completa todos los campos.');
      return false;
    }
    if (nombreUsuario.length > 30) {
      Alert.alert('Nombre de usuario', 'Máximo 30 caracteres.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(correo.trim())) {
      Alert.alert('Correo inválido', 'Ingresa un correo válido.');
      return false;
    }
    if (!fechaNacimiento) {
      Alert.alert('Fecha requerida', 'Selecciona tu fecha de nacimiento.');
      return false;
    }
    if (!sexo) {
      Alert.alert('Sexo requerido', 'Selecciona una opción.');
      return false;
    }
    return true;
  };

  const validarPaso2 = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Campos incompletos', 'Ingresa y confirma la contraseña.');
      return false;
    }
    if (password.length < 8) {
      Alert.alert('Contraseña débil', 'Mínimo 8 caracteres.');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Contraseñas distintas', 'Las contraseñas no coinciden.');
      return false;
    }
    if (!acceptTerms) {
      Alert.alert('Términos', 'Debes aceptar los términos y condiciones.');
      return false;
    }
    return true;
  };

  const siguientePaso = () => {
    if (validarPaso1()) setStep(2);
  };

  const pasoAnterior = () => setStep(1);

  const formatearFecha = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const handleRegister = async () => {
    if (!validarPaso2() || !fechaNacimiento) return;

    try {
      setLoading(true);

      const payload = {
        nombre_completo: nombreCompleto.trim(),
        nombre_usuario: nombreUsuario.trim().toLowerCase(),
        correo: correo.trim().toLowerCase(),
        password,
        fecha_nacimiento: formatearFecha(fechaNacimiento),
        sexo: sexo.toLowerCase(),
      };

      console.log('Payload:', { ...payload, password: '***' });

      const response = await authService.register(payload);
      console.log('Respuesta:', response);

      await storage.guardarSesion(response.access_token, response.usuario);
      router.replace('/(tabs)/inicio');
    } catch (error: any) {
      console.log('Error:', error);
      Alert.alert('Error al registrarse', error?.message || 'Error desconocido');
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
          <ScrollView
            contentContainerStyle={{ paddingBottom: 80 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <ScreenHeader
              title="CREAR CUENTA"
              subtitle={
                step === 1
                  ? 'Paso 1 de 2 · Información personal'
                  : 'Paso 2 de 2 · Contraseña'
              }
            />

            {/* ---------- PASO 1 ---------- */}
            {step === 1 && (
              <>
                <TextInput
                  icon={<Feather name="user" size={20} color="#666" />}
                  placeholder="Nombre completo"
                  value={nombreCompleto}
                  onChangeText={setNombreCompleto}
                />

                <TextInput
                  icon={<Feather name="at-sign" size={20} color="#666" />}
                  placeholder="Nombre de usuario (máx. 30)"
                  value={nombreUsuario}
                  onChangeText={setNombreUsuario}
                  autoCapitalize="none"
                />

                <TextInput
                  icon={<Feather name="mail" size={20} color="#666" />}
                  placeholder="Correo electrónico"
                  value={correo}
                  onChangeText={setCorreo}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <DateInput
                  value={fechaNacimiento}
                  onChange={setFechaNacimiento}
                  placeholder="Fecha de nacimiento"
                />

                <SelectInput
                  selectedValue={sexo}
                  onValueChange={setSexo}
                  placeholder="Selecciona tu sexo..."
                  options={[
                    { label: 'Masculino', value: 'masculino' },
                    { label: 'Femenino', value: 'femenino' },
                    { label: 'Otro', value: 'otro' },
                  ]}
                />

                <PrimaryButton
                  label="Siguiente"
                  icon={<Feather name="arrow-right" size={18} color="#fff" />}
                  onPress={siguientePaso}
                />
              </>
            )}

            {/* ---------- PASO 2 ---------- */}
            {step === 2 && (
              <>
                {/* Contraseña principal con barra de fuerza */}
                <PasswordInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Contraseña"
                  showStrength
                />

                {/* Confirmar contraseña (compara con la principal) */}
                <PasswordInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirmar contraseña"
                  compararCon={password}
                />

                <View className="flex-row items-center mb-[25px] mt-[15px]">
                  <Checkbox
                    label="Acepto los términos y condiciones"
                    checked={acceptTerms}
                    onToggle={() => setAcceptTerms(!acceptTerms)}
                  />
                </View>

                <PrimaryButton
                  label={loading ? 'Registrando...' : 'Registrarme'}
                  icon={
                    loading ? undefined : (
                      <Feather name="arrow-right" size={18} color="#fff" />
                    )
                  }
                  onPress={handleRegister}
                  disabled={loading}
                />

                <View className="mt-[15px]">
                  <PrimaryButton
                    label="Atrás"
                    icon={<Feather name="arrow-left" size={18} color="#fff" />}
                    onPress={pasoAnterior}
                  />
                </View>
              </>
            )}

            {step === 1 && (
              <>
                <Divider text="o regístrate con" />
                <SocialButtonsRow
                  googleIcon={
                    <FontAwesome6
                      name="google"
                      size={22}
                      color="#000"
                      iconStyle="brand"
                    />
                  }
                  appleIcon={
                    <FontAwesome6
                      name="apple"
                      size={22}
                      color="#000"
                      iconStyle="brand"
                    />
                  }
                />
              </>
            )}

            <LinkText
              question="¿Ya tienes una cuenta?"
              actionText="Inicia sesión aquí"
              onPress={() => router.push('/(auth)/login')}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}