import "../../global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <StatusBar style="dark" backgroundColor="#FFFFFF" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: "#FFFFFF",
                    },
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(drawer)" />
            </Stack>
        </SafeAreaProvider>
    );
}