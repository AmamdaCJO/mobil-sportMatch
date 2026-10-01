import { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';

export default function Inicio() {
  const [mostrarWelcome, setMostrarWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMostrarWelcome(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!mostrarWelcome) {
    return (
      <View className="flex-1 bg-black justify-center items-center">
        <Image
          source={require('../../../../assets/images/Logo-SportMatch.webp')}
          className="w-[250px] h-[250px]"
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-white text-4xl font-bold">Welcome</Text>
    </View>
  );
}