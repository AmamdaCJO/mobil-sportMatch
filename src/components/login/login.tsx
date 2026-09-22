import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../../assets/styles/login/login";

export default function Login() {
  return (
    <View style={{ flex: 1 }}>
      {/* Imagen de fondo anclada arriba */}
      <Image
        source={require("../../../assets/images/login/login-bg.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      />

      {/* Contenido encima */}
      <View style={styles.overlay}>
        {/* Logo */}
        <Image
          source={require("../../../assets/images/login/Logo-SportMatch.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Cuadro blanco */}
        <View style={styles.card}>
          <Text style={styles.title}>INICIAR SESIÓN</Text>
          <Text style={styles.subtitle}>Accede a tu cuenta para continuar</Text>

          <View style={styles.blueLine} />

          {/* Input correo */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../../assets/images/login/icons/email-icon.png")}
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

          {/* Input contraseña */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../../assets/images/login/icons/lock-icon.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#999999"
              secureTextEntry
            />
          </View>

          {/* Recordarme / Olvidé contraseña */}
          <View style={styles.rowBetween}>
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>Recordarme</Text>
            </View>
            <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
          </View>

          {/* Botón principal */}
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>INICIAR SESIÓN</Text>
            <Image
              source={require("../../../assets/images/login/icons/arrow-icon.png")}
              style={styles.mainButtonIcon}
            />
          </TouchableOpacity>

          {/* Divisor */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>o continúa con</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Botones sociales */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../../assets/images/login/google-icon.png")}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../../assets/images/login/apple-icon.png")}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Registro */}
          <Text style={styles.registerText}>
            ¿No tienes una cuenta?{" "}
            <Text style={styles.registerLink}>Regístrate aquí</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
