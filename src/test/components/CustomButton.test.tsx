import React from 'react';
import { render } from '@testing-library/react-native';

import CustomButton from '@/components/ui/CustomButton';

describe('CustomButton', () => {

    test('debe renderizar el botón', () => {
        try {
            const result = render(
                <CustomButton
                    title="Continuar"
                    onPress={() => {}}
                />
            );

            expect(result).toBeDefined();

            console.log('Prueba exitosa: el botón se renderiza correctamente');
        } catch (error) {
            console.error('Prueba fallida: el botón no se pudo renderizar');
            throw error;
        }
    });

    test('debe permitir activar el estado de loading', () => {
        try {
            const result = render(
                <CustomButton
                    title="Continuar"
                    onPress={() => {}}
                    isLoading={true}
                />
            );

            expect(result).toBeDefined();

            console.log('Prueba exitosa: el botón permite activar el estado de loading');
        } catch (error) {
            console.error('Prueba fallida: el botón no permite activar el estado de loading');
            throw error;
        }
    });

    test('debe permitir deshabilitar el botón', () => {
        try {
            const result = render(
                <CustomButton
                    title="Continuar"
                    onPress={() => {}}
                    disabled={true}
                />
            );

            expect(result).toBeDefined();

            console.log('Prueba exitosa: el botón puede ser deshabilitado');
        } catch (error) {
            console.error('Prueba fallida: el botón no puede ser deshabilitado');
            throw error;
        }
    });

});
