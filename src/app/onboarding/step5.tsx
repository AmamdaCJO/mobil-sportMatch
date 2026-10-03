import React, {useState} from 'react';
import {router} from 'expo-router';
import OnboardingStepLayout from "@/components/onboarding/OnboardingStepLayout";
import OptionCard from "@/components/onboarding/OptionCard";

export default function Step5Screen() {
    const [seleccion, setSeleccion] = useState<string | null>(null);

    const opciones = [
        {id: '1', titulo: 'Divertirme y socializar', icono: 'walk'},
        {id: '2', titulo: 'Mejorar mi nivel técnico', icono: 'leaf'},
        {id: '3', titulo: 'Mantenerme en forma', icono: 'bicycle'},
        {id: '4', titulo: 'Competir y ganar', icono: 'water-outline'},
        {id: '5', titulo: 'Caminata Ligera', icono: 'footsteps'},
    ];

    return (
        <OnboardingStepLayout
            step={1}
            total={6}
            title="¿Cuál es tu objetivo principal?"
            subtitle="Esto nos ayudará a recomendarte los mejores eventos y rutas cercanas."
            onNext={() => router.push('/onboarding/step6')}
            nextDisabled={!seleccion}
        >
            {opciones.map((opcion) => (
                <OptionCard
                    key={opcion.id}
                    option={opcion}
                    selected={seleccion === opcion.id}
                    onPress={() => setSeleccion(opcion.id)}
                />
            ))}
        </OnboardingStepLayout>
    );
}