import React from 'react';
import { render } from '@testing-library/react-native';
import Login from '@/app/(auth)/login';

describe('Login', () => {
    // Verifica que la pantalla de Login se renderice correctamente.
    test('debe renderizar el Login', () => {
        try {
            const result = render(<Login />);

            expect(result).toBeDefined();

            console.log('Prueba exitosa: la pantalla de Login se renderiza correctamente');
        } catch (error) {
            console.error('Prueba fallida: la pantalla de Login no se pudo renderizar correctamente');
            throw error;
        }
    });
});
