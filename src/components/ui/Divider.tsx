import { View, Text } from 'react-native';

interface DividerProps {
  text: string;
  textColor?: string;
  lineColor?: string;
}

export default function Divider({
  text,
  textColor = '#888888',
  lineColor = '#dddddd',
}: DividerProps) {
  return (
    <View className="flex-row items-center mb-5">
      <View className="flex-1 h-px" style={{ backgroundColor: lineColor }} />
      <Text className="mx-[10px] text-[13px]" style={{ color: textColor }}>
        {text}
      </Text>
      <View className="flex-1 h-px" style={{ backgroundColor: lineColor }} />
    </View>
  );
}