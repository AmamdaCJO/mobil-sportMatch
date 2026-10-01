import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';

import Login from '../services/(auth)/authService';

// ─────────────────────────────────────────────
// MOCKS
// ─────────────────────────────────────────────

// Mock de expo-router
const mockReplace = jest.fn();
const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  router: {
    replace: (...args: unknown[]) => mockReplace(...args),
    push: (...args: unknown[]) => mockPush(...args),
  },
}));

// Mock del authService
const mockLogin = jest.fn();
jest.mock('../services/(auth)/authService', () => ({
  authService: {
    login: (...args: unknown[]) => mockLogin(...args),
  },
}));

// Mock del storage
const mockGuardarSesion = jest.fn();
jest.mock('../services/(auth)/storage', () => ({
  storage: {
    guardarSesion: (...args: unknown[]) => mockGuardarSesion(...args),
  },
}));

// ─────────────────────────────────────────────
// SUITE DE TESTS
// ─────────────────────────────────────────────

describe('Login Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renderiza los campos y el botón de inicio de sesión', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    expect(getByPlaceholderText('Correo electrónico')).toBeTruthy();
    expect(getByPlaceholderText('Contraseña')).toBeTruthy();
    expect(getByText('Iniciar sesión')).toBeTruthy();
    expect(getByText('INICIAR SESIÓN')).toBeTruthy();
  });

  it('muestra alerta si los campos están vacíos', async () => {
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    const { getByText } = render(<Login />);

    fireEvent.press(getByText('Iniciar sesión'));

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        'Campos incompletos',
        'Ingresa correo y contraseña.'
      );
    });

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('muestra alerta si solo el email está lleno', async () => {
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(
      getByPlaceholderText('Correo electrónico'),
      'test@mail.com'
    );
    fireEvent.press(getByText('Iniciar sesión'));

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        'Campos incompletos',
        'Ingresa correo y contraseña.'
      );
    });

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('inicia sesión correctamente con credenciales válidas', async () => {
    const fakeResponse = {
      access_token: 'fake-token-123',
      usuario: {
        id: 1,
        nombre_completo: 'Juan Pérez',
        nombre_usuario: 'juanp',
        correo: 'test@mail.com',
        rol: 'jugador',
        estado_cuenta: 'activo',
      },
    };

    mockLogin.mockResolvedValueOnce(fakeResponse);
    mockGuardarSesion.mockResolvedValueOnce(undefined);

    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(
      getByPlaceholderText('Correo electrónico'),
      '  TEST@Mail.com  ' // con espacios y mayúsculas para validar normalización
    );
    fireEvent.changeText(getByPlaceholderText('Contraseña'), 'secreta123');
    fireEvent.press(getByText('Iniciar sesión'));

    await waitFor(() => {
      // El correo debe normalizarse a minúsculas y sin espacios
      expect(mockLogin).toHaveBeenCalledWith({
        correo: 'test@mail.com',
        password: 'secreta123',
      });
    });

    await waitFor(() => {
      expect(mockGuardarSesion).toHaveBeenCalledWith(
        'fake-token-123',
        fakeResponse.usuario
      );
    });

    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/(drawer)/(tabs)/inicio');
    });
  });

  it('muestra alerta de error si el login falla', async () => {
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    mockLogin.mockRejectedValueOnce(new Error('Credenciales inválidas'));

    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(
      getByPlaceholderText('Correo electrónico'),
      'test@mail.com'
    );
    fireEvent.changeText(getByPlaceholderText('Contraseña'), 'wrongpass');
    fireEvent.press(getByText('Iniciar sesión'));

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        'Error al iniciar sesión',
        'Credenciales inválidas'
      );
    });

    expect(mockGuardarSesion).not.toHaveBeenCalled();
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it('deshabilita el botón mientras carga', async () => {
    // Simulamos una promesa que nunca se resuelve para ver el estado loading
    mockLogin.mockImplementation(() => new Promise(() => {}));

    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(
      getByPlaceholderText('Correo electrónico'),
      'test@mail.com'
    );
    fireEvent.changeText(getByPlaceholderText('Contraseña'), 'secreta123');
    fireEvent.press(getByText('Iniciar sesión'));

    // El texto del botón debe cambiar a "Iniciando..."
    await waitFor(() => {
      expect(getByText('Iniciando...')).toBeTruthy();
    });
  });
});