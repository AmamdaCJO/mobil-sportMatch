// src/services/api.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 👇 IP REAL de tu PC en la red WiFi
export const API_URL = 'http://192.168.1.168:5000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const mensaje =
      error.response?.data?.error ||
      error.message ||
      'Error de conexión con el servidor';
    return Promise.reject(new Error(mensaje));
  }
);