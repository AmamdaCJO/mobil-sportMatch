import { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../../assets/styles/inicio/inicio';

export default function Inicio() {
  const [mostrarWelcome, setMostrarWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMostrarWelcome(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!mostrarWelcome) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/LogotipoPrincipal.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
    </View>
  );
}