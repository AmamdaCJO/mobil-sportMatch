import {Redirect} from 'expo-router';

export default function IndexScreen() {
    // Arranque de Encuestas
    //return <Redirect href="/onboarding/step1" />;

    // Arranque de Login
    //return <Redirect href="/(auth)/login"/>;
    return <Redirect href="/(auth)/reset-password"/>;
    // return <Redirect href="/(auth)/forgot-password"/>;
    // Arranque de Register
    // return <Redirect href="/(auth)/login" />;

}
