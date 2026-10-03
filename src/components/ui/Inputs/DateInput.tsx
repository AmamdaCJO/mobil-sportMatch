import { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';

import { Feather } from '@react-native-vector-icons/feather';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DateInputProps {
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
}

export default function DateInput({
  value,
  onChange,
  placeholder = 'Selecciona una fecha',
}: DateInputProps) {
  const [mostrar, setMostrar] = useState(false);

  const formatear = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const onChangeFecha = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') setMostrar(false);
    if (selectedDate) onChange(selectedDate);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setMostrar(true)}
        className="flex-row items-center border border-[#dddddd] rounded-lg px-3 h-[50px] mb-[15px] bg-[#fafafa]"
      >
        <Feather name="calendar" size={20} color="#666" />
        <Text className="ml-[10px] text-[15px] text-black">
          {value ? formatear(value) : placeholder}
        </Text>
      </TouchableOpacity>

      {mostrar && (
        <DateTimePicker
          value={value ?? new Date(2000, 0, 1)}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          maximumDate={new Date()}
          onChange={onChangeFecha}
        />
      )}
    </>
  );
}