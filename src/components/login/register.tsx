import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import styles from '../../../assets/styles/login/register';

export default function Register() {
  return (
    <View style={styles.root}>
      <Image
        source={require('../../../assets/images/login/login-bg.jpg')}
        style={styles.bgImage}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <Image
          source={require('../../../assets/images/login/Logo-SportMatch.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <Text style={styles.title}>CREAR CUENTA</Text>
          <Text style={styles.subtitle}>Regístrate para comenzar</Text>

          <View style={styles.blueLine} />

          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/images/login/icons/email-icon.png')}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre completo"
              placeholderTextColor="#999999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/images/login/icons/email-icon.png')}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#999999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/images/login/icons/lock-icon.png')}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#999999"
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/images/login/icons/lock-icon.png')}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              placeholderTextColor="#999999"
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>Registrarse</Text>
            <Image
              source={require('../../../assets/images/login/icons/arrow-icon.png')}
              style={styles.mainButtonIcon}
            />
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>o regístrate con</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../../assets/images/login/google-icon.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../../assets/images/login/apple-icon.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.registerText}>
            ¿Ya tienes una cuenta?{' '}
            <Text
              style={styles.registerLink}
              onPress={() => router.push('/')}
            >
              Inicia sesión
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}