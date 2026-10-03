import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'access_token';
const USER_KEY = 'usuario';

export const storage = {
  async guardarSesion(token: string, usuario: any) {
    await AsyncStorage.multiSet([
      [TOKEN_KEY, token],
      [USER_KEY, JSON.stringify(usuario)],
    ]);
  },
  async obtenerToken() {
    return AsyncStorage.getItem(TOKEN_KEY);
  },
  async obtenerUsuario() {
    const raw = await AsyncStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },
  async cerrarSesion() {
    await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
  },
};