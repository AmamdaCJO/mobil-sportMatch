import { ReactNode } from 'react';
import InputField from './InputField';

interface TextInputProps {
  icon?: ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  borderColor?: string;
  borderWidth?: number;
}

export default function TextInput({
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  borderColor,
  borderWidth,
}: TextInputProps) {
  return (
    <InputField
      icon={icon}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      borderColor={borderColor}
      borderWidth={borderWidth}
    />
  );
}