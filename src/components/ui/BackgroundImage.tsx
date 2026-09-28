import { Image, ImageSourcePropType } from 'react-native';

interface BackgroundImageProps {
  source: ImageSourcePropType;
  heightClass?: string; 
}

export default function BackgroundImage({
  source,
  heightClass = 'h-[60%]',
}: BackgroundImageProps) {
  return (
    <Image
      source={source}
      className={`absolute top-0 left-0 right-0 w-full ${heightClass}`}
      resizeMode="cover"
    />
  );
}