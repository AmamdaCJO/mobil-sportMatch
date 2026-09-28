import { useState } from 'react';
import { View, Text } from 'react-native';

import { Feather } from '@react-native-vector-icons/feather';
import InputField from './InputField';

// ---------- Tipos ----------
type Fuerza = 'vacia' | 'debil' | 'media' | 'fuerte';

export interface ResultadoFuerza {
  nivel: Fuerza;
  score: number;
  color: string;
  label: string;
}

// ---------- Lógica de fuerza ----------
export function evaluarFuerza(pass: string): ResultadoFuerza {
  if (!pass) {
    return { nivel: 'vacia', score: 0, color: '#dddddd', label: '' };
  }

  const reglas = {
    longitud: pass.length >= 8,
    minuscula: /[a-z]/.test(pass),
    mayuscula: /[A-Z]/.test(pass),
    numero: /\d/.test(pass),
    simbolo: /[^A-Za-z0-9]/.test(pass),
  };

  const cumplidas = Object.values(reglas).filter(Boolean).length;

  if (cumplidas <= 2) {
    return { nivel: 'debil', score: 1, color: '#e74c3c', label: 'Débil' };
  }
  if (cumplidas <= 4) {
    return { nivel: 'media', score: 2, color: '#f1c40f', label: 'Media' };
  }
  return { nivel: 'fuerte', score: 3, color: '#2ecc71', label: 'Fuerte' };
}

// ---------- Barra visual ----------
function BarraFuerza({ nivel, color }: { nivel: Fuerza; color: string }) {
  const total = 3;
  const activos =
    nivel === 'debil' ? 1 : nivel === 'media' ? 2 : nivel === 'fuerte' ? 3 : 0;

  return (
    <View className="flex-row" style={{ gap: 6 }}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          className="flex-1 h-[6px] rounded-full"
          style={{ backgroundColor: i < activos ? color : '#e0e0e0' }}
        />
      ))}
    </View>
  );
}

// ---------- Requisitos ----------
function Requisitos({ pass }: { pass: string }) {
  const items = [
    { ok: pass.length >= 8, texto: 'Mínimo 8 caracteres' },
    { ok: /[a-z]/.test(pass), texto: 'Una minúscula' },
    { ok: /[A-Z]/.test(pass), texto: 'Una mayúscula' },
    { ok: /\d/.test(pass), texto: 'Un número' },
    { ok: /[^A-Za-z0-9]/.test(pass), texto: 'Un símbolo (!@#$...)' },
  ];

  return (
    <View className="mb-[15px]">
      {items.map((item, i) => (
        <View key={i} className="flex-row items-center mb-[3px]">
          <Feather
            name={item.ok ? 'check-circle' : 'circle'}
            size={14}
            color={item.ok ? '#2ecc71' : '#bbb'}
          />
          <Text
            className="ml-[6px] text-[12px]"
            style={{ color: item.ok ? '#2ecc71' : '#999' }}
          >
            {item.texto}
          </Text>
        </View>
      ))}
    </View>
  );
}

// ---------- Props ----------
interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  /** Muestra la barra de fuerza y los requisitos */
  showStrength?: boolean;
  /** Muestra mensaje de coincidencia (útil para "confirmar contraseña") */
  compararCon?: string;
}

export default function PasswordInput({
  value,
  onChangeText,
  placeholder = 'Contraseña',
  showStrength = false,
  compararCon,
}: PasswordInputProps) {
  const [mostrar, setMostrar] = useState(false);

  const fuerza = evaluarFuerza(value);

  // Si se pasa `compararCon`, mostramos borde verde/rojo según coincidan
  const coinciden =
    compararCon !== undefined &&
    compararCon.length > 0 &&
    value.length > 0 &&
    value === compararCon;
  const noCoinciden =
    compararCon !== undefined &&
    compararCon.length > 0 &&
    value.length > 0 &&
    value !== compararCon;

  const bordeColor = showStrength
    ? value.length === 0
      ? '#dddddd'
      : fuerza.color
    : coinciden
    ? '#2ecc71'
    : noCoinciden
    ? '#e74c3c'
    : '#dddddd';

  return (
    <>
      <InputField
        icon={<Feather name="lock" size={20} color="#666" />}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!mostrar}
        rightIcon={
          <Feather name={mostrar ? 'eye-off' : 'eye'} size={20} color="#666" />
        }
        onRightIconPress={() => setMostrar(!mostrar)}
        borderColor={bordeColor}
        borderWidth={2}
      />

      {/* Barra + requisitos si showStrength */}
      {showStrength && value.length > 0 && (
        <>
          <View className="mt-[4px] mb-[10px] px-[2px]">
            <BarraFuerza nivel={fuerza.nivel} color={fuerza.color} />
            <Text
              className="text-[12px] font-semibold mt-[4px]"
              style={{ color: fuerza.color }}
            >
              {fuerza.nivel === 'fuerte'
                ? 'Contraseña segura'
                : `Contraseña ${fuerza.label}`}
            </Text>
          </View>

          {fuerza.nivel !== 'fuerte' && <Requisitos pass={value} />}
        </>
      )}

      {/* Mensaje si no coincide (para confirmar contraseña) */}
      {noCoinciden && (
        <View className="flex-row items-center mt-[0px] mb-[15px] px-[2px]">
          <Feather name="x-circle" size={14} color="#e74c3c" />
          <Text className="ml-[6px] text-[12px] font-semibold text-[#e74c3c]">
            Las contraseñas no coinciden
          </Text>
        </View>
      )}
    </>
  );
}