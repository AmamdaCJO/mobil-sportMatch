import React, {useState} from 'react';
import {router} from 'expo-router';
import OnboardingStepLayout from "@/components/onboarding/OnboardingStepLayout";
import OptionCard from "@/components/onboarding/OptionCard";

export default function Step3Screen() {
    const [seleccion, setSeleccion] = useState<string | null>(null);

    const opciones = [
        {id: '1', titulo: 'Mañana (6am-12pm)', icono: 'walk'},
        {id: '2', titulo: 'Tarde (12pm-6pm)', icono: 'leaf'},
        {id: '3', titulo: 'Noche (6pm-11pm)', icono: 'bicycle'},
    ];

    return (
        <OnboardingStepLayout
            step={1}
            total={6}
            title="¿Cuál es tu horario preferido para hacer deporte?"
            subtitle="Esto nos ayudará a recomendarte los mejores eventos y rutas cercanas."
            onNext={() => router.push('/onboarding/step4')}
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