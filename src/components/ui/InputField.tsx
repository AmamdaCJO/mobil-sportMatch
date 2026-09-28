import { ReactNode } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

interface InputFieldProps {
  icon?: ReactNode;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
  editable?: boolean;
}

export default function InputField({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  rightIcon,
  onRightIconPress,
  editable = true,
}: InputFieldProps) {
  return (
    <View className="flex-row items-center border border-[#dddddd] rounded-lg px-3 h-[50px] mb-[15px] bg-[#fafafa]">
      {icon && <View className="mr-[10px]">{icon}</View>}

      <TextInput
        className="flex-1 text-[15px] text-black"
        placeholder={placeholder}
        placeholderTextColor="#999999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={editable}
      />

      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} className="ml-[10px]">
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
}