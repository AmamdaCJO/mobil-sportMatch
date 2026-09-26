import { ReactNode } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface SocialButtonProps {
  icon: ReactNode;
  label: string;
  onPress?: () => void;
}

export default function SocialButton({
  icon,
  label,
  onPress,
}: SocialButtonProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-center border border-[#dddddd] rounded-lg h-[50px] flex-1 mx-[5px] bg-white"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="mr-2">{icon}</View>
      <Text className="text-[15px] text-[#333333] font-medium">{label}</Text>
    </TouchableOpacity>
  );
}