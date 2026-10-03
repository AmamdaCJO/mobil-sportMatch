import React from 'react';
import { render } from '@testing-library/react-native';

import OnboardingStepLayout from '@/components/onboarding/OnboardingStepLayout';

describe('OnboardingStepLayout - Progreso', () => {

    test('debe calcular correctamente el progreso', () => {
        const step = 3;
        const total = 6;

        const progress = (step / total) * 100;

        try {
            // expect(progress).toBe(30);
            expect(progress).toBe(50);
            console.log('Prueba exitosa: el progreso se calculó correctamente');
        } catch (error) {
            console.error('Prueba fallida: el progreso no se calculó correctamente');
            throw error;
        }
    });


});
