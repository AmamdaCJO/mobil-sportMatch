import { ReactNode } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  icon?: ReactNode;
  onPress?: () => void;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  iconPosition?: 'left' | 'right';
}

export default function PrimaryButton({
  label,
  icon,
  onPress,
  bgColor = '#000000',
  textColor = '#ffffff',
  disabled = false,
  loading = false,
  iconPosition = 'right',
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      className="flex-row justify-center items-center h-[52px] rounded-lg mb-[25px]"
      style={{ backgroundColor: bgColor, opacity: disabled ? 0.5 : 1 }}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {iconPosition === 'left' && icon && <View className="mr-2">{icon}</View>}

      <Text
        className="text-base font-bold"
        style={{
          color: textColor,
          marginRight: iconPosition === 'right' && icon ? 8 : 0,
        }}
      >
        {loading ? 'Cargando...' : label}
      </Text>

      {iconPosition === 'right' && icon && <View>{icon}</View>}
    </TouchableOpacity>
  );
}