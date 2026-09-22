import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import styles from '../../../assets/styles/inicio/inicio';
import Login from '../login/login';

export default function Inicio() {
  const [mostrarLogin, setMostrarLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMostrarLogin(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!mostrarLogin) {
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

  return <Login />;
}