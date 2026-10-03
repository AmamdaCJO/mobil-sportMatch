import React, {useState} from 'react';
import {router} from 'expo-router';
import OnboardingStepLayout from "@/components/onboarding/OnboardingStepLayout";
import OptionCard from "@/components/onboarding/OptionCard";

export default function Step4Screen() {
    const [seleccion, setSeleccion] = useState<string | null>(null);

    const opciones = [
        {id: '1', titulo: 'En equipo', icono: 'walk'},
        {id: '2', titulo: 'Uno contra uno', icono: 'leaf'},
        {id: '3', titulo: 'Individual', icono: 'bicycle'},
        {id: '4', titulo: 'Sin preferencia', icono: 'water-outline'},
    ];

    return (
        <OnboardingStepLayout
            step={1}
            total={6}
            title="¿Prefieres practicar...?"
            subtitle="Esto nos ayudará a recomendarte los mejores eventos y rutas cercanas."
            onNext={() => router.push('/onboarding/step5')}
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