import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Step5Screen from '@/app/onboarding/step5';

describe('Step5Screen', () => {

    // Verifica que la pantalla de onboarding se renderice correctamente.
    test('debe renderizar el Step 5', () => {
        try {
            const result = render(<Step5Screen />);

            expect(result).toBeDefined();

            console.log('Prueba exitosa: el Step 5 se renderiza correctamente');
        } catch (error) {
            console.error('Prueba fallida: el Step 5 no se pudo renderizar correctamente');
            throw error;
        }
    });

});
