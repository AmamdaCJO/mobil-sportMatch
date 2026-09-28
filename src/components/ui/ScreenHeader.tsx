import { View, Text } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  accentColor?: string;
  titleSize?: number;
  subtitleSize?: number;
}

export default function ScreenHeader({
  title,
  subtitle,
  accentColor = '#3ad5ec',
  titleSize = 30,
  subtitleSize = 18,
}: ScreenHeaderProps) {
  return (
    <>
      <Text className="font-venus text-black" style={{ fontSize: titleSize }}>
        {title}
      </Text>
      <Text
        className="text-[#bcbec5] text-left mt-[6px]"
        style={{ fontSize: subtitleSize }}
      >
        {subtitle}
      </Text>
      <View
        className="w-[5%] h-[3px] mt-[10px] mb-[25px] rounded-[2px]"
        style={{ backgroundColor: accentColor }}
      />
    </>
  );
}