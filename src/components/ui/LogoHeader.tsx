import { Image, ImageSourcePropType } from 'react-native';

interface LogoHeaderProps {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
  marginBottom?: number;
}

export default function LogoHeader({
  source,
  width = 250,
  height = 250,
  marginBottom = 30,
}: LogoHeaderProps) {
  return (
    <Image
      source={source}
      style={{ width, height, marginBottom }}
      resizeMode="contain"
    />
  );
}