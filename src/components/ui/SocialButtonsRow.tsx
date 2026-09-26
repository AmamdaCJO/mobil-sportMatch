import { ReactNode } from 'react';
import { View } from 'react-native';
import SocialButton from './SocialButton';

interface SocialButtonsRowProps {
  googleIcon: ReactNode;
  appleIcon: ReactNode;
  onGooglePress?: () => void;
  onApplePress?: () => void;
  googleLabel?: string;
  appleLabel?: string;
}

export default function SocialButtonsRow({
  googleIcon,
  appleIcon,
  onGooglePress,
  onApplePress,
  googleLabel = 'Google',
  appleLabel = 'Apple',
}: SocialButtonsRowProps) {
  return (
    <View className="flex-row justify-between mb-5">
      <SocialButton icon={googleIcon} label={googleLabel} onPress={onGooglePress} />
      <SocialButton icon={appleIcon} label={appleLabel} onPress={onApplePress} />
    </View>
  );
}