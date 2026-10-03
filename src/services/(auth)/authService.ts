// src/services/authService.ts
import { api } from '../api';

export interface LoginPayload {
  correo: string;
  password: string;
}

export interface Usuario {
  id: number;
  nombre_completo: string;
  nombre_usuario: string;
  correo: string;
  rol: string;
  estado_cuenta: string;
  // ...los demás campos de to_dict()
}

export interface LoginResponse {
  access_token: string;
  usuario: Usuario;
}

export const authService = {
  // POST /api/auth/login
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>('/auth/login', payload);
    return data;
  },

  // POST /api/auth/register
  async register(payload: Record<string, any>): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>('/auth/register', payload);
    return data;
  },

  // POST /api/auth/olvide-contrasena
  async olvideContrasena(correo: string) {
    const { data } = await api.post('/auth/olvide-contrasena', { correo });
    return data;
  },

  // POST /api/auth/restablecer-contrasena
  async restablecerContrasena(token: string, nueva_password: string) {
    const { data } = await api.post('/auth/restablecer-contrasena', {
      token,
      nueva_password,
    });
    return data;
  },

  // GET /api/auth/me
  async me(): Promise<Usuario> {
    const { data } = await api.get<Usuario>('/auth/me');
    return data;
  },
};