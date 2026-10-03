import { View, Text, TouchableOpacity } from 'react-native';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  activeColor?: string;
  textSize?: number;
}

export default function Checkbox({
  label,
  checked,
  onToggle,
  activeColor = '#3ad5ec',
  textSize = 13,
}: CheckboxProps) {
  return (
    <TouchableOpacity className="flex-row items-center" onPress={onToggle}>
      <View
        className="w-[18px] h-[18px] border rounded-[4px] mr-2 items-center justify-center"
        style={{
          backgroundColor: checked ? activeColor : 'transparent',
          borderColor: checked ? activeColor : '#999999',
        }}
      >
        {checked && <Text className="text-white text-[12px] font-bold">✓</Text>}
      </View>
      <Text className="text-[#333333]" style={{ fontSize: textSize }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}