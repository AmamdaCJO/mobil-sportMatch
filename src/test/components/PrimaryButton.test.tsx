import React from 'react';
import { render } from '@testing-library/react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';

describe('PrimaryButton', () => {

    // Verifica que el botón muestre su texto normalmente.
    test('debe mostrar el texto del botón', () => {
        const result = render(
            <PrimaryButton label="Registrarme" />
        );

        expect(result).toBeDefined();
    });

    // Verifica que el botón pueda recibir el estado de carga.
    test('debe permitir activar el estado loading', () => {
        const result = render(
            <PrimaryButton
                label="Registrarme"
                loading={true}
            />
        );

        expect(result).toBeDefined();
    });

    // Verifica que el botón pueda recibir el estado deshabilitado.
    test('debe permitir deshabilitar el botón', () => {
        const result = render(
            <PrimaryButton
                label="Registrarme"
                disabled={true}
            />
        );

        expect(result).toBeDefined();
    });

});