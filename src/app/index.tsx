import {Redirect} from 'expo-router';

export default function IndexScreen() {
    // Arranque de Encuestas
    return <Redirect href="/onboarding/step1" />;

    // Arranque de Login
  //  return <Redirect href="/(auth)/login"/>;
    // Arranque de Register
    // return <Redirect href="/(auth)/login" />;

}