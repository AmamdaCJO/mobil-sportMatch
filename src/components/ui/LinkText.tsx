import { Text } from 'react-native';

interface LinkTextProps {
  question: string;
  actionText: string;
  onPress: () => void;
  linkColor?: string;
  textColor?: string;
}

export default function LinkText({
  question,
  actionText,
  onPress,
  linkColor = '#3ad5ec',
  textColor = '#666666',
}: LinkTextProps) {
  return (
    <Text
      className="text-center text-sm mt-[10px] mb-[30px]"
      style={{ color: textColor }}
    >
      {question}{' '}
      <Text className="font-bold" style={{ color: linkColor }} onPress={onPress}>
        {actionText}
      </Text>
    </Text>
  );
}