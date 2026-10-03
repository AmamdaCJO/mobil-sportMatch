import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectInputProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
}

export default function SelectInput({
  selectedValue,
  onValueChange,
  options,
  placeholder = 'Selecciona...',
}: SelectInputProps) {
  return (
    <View className="border border-[#dddddd] rounded-lg mb-[15px] bg-[#fafafa] overflow-hidden">
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{ height: 50 }}
      >
        <Picker.Item label={placeholder} value="" />
        {options.map((opt) => (
          <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </Picker>
    </View>
  );
}