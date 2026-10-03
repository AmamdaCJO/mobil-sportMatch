import React from 'react';
import { render } from '@testing-library/react-native';

import Register from '@/app/(auth)/register';

describe('Register', () => {

    // Verifica que la pantalla de Register se renderice correctamente.
    test('debe renderizar el Register', () => {
        try {
            const result = render(<Register />);

            expect(result).toBeDefined();

            console.log('Prueba exitosa: la pantalla de Register se renderiza correctamente');
        } catch (error) {
            console.error('Prueba fallida: la pantalla de Register no se pudo renderizar correctamente');
            throw error;
        }
    });

});
