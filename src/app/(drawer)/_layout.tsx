import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#0D5C3B',
                drawerInactiveTintColor: '#64748B',
                drawerStyle: {
                    backgroundColor: '#F8FAFC',
                    width: 280,
                },
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Inicio',
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="home-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="configuracion"
                options={{
                    drawerLabel: 'Configuración',
                    headerShown: true,
                    title: 'Configuración',
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="settings-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="nuevos-eventos"
                options={{
                    drawerLabel: 'Nuevos eventos',
                    headerShown: true,
                    title: 'Nuevos eventos',
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="calendar-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="en-vivo"
                options={{
                    drawerLabel: 'En vivo',
                    headerShown: true,
                    title: 'En vivo',
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="radio-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="fechas"
                options={{
                    drawerLabel: 'Fechas',
                    headerShown: true,
                    title: 'Fechas',
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="calendar-number-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="ayuda"
                options={{
                    drawerLabel: 'Ayuda y Soporte',
                    headerShown: true,
                    title: 'Soporte',
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name="help-circle-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer>
    );
}
