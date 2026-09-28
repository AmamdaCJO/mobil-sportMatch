// src/app/(drawer)/(tabs)/_layout.tsx
import { Tabs, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import {DrawerActions} from "expo-router/react-navigation";

export default function TabsLayout() {
    const navigation = useNavigation();

    // Componente reutilizable para el botón del menú hamburguesa
    const MenuButton = () => (
        <TouchableOpacity
            className="ml-4 p-1"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
            <Ionicons name="menu" size={28} color="#0F172A" />
        </TouchableOpacity>
    );

    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                headerLeft: () => <MenuButton />,
                tabBarActiveTintColor: '#0D5C3B',
                tabBarInactiveTintColor: '#64748B',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 10,
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    borderTopColor: '#F1F5F9',
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                }
            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'SportMatch',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="comunidad/index"
                options={{
                    title: 'Comunidad',
                    tabBarLabel: 'Comunidad',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'people' : 'people-outline'} size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="shorts/index"
                options={{
                    title: 'SportShorts',
                    tabBarLabel: 'Shorts',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'play-circle' : 'play-circle-outline'} size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="eventos/index"
                options={{
                    title: 'Explorar',
                    tabBarLabel: 'Eventos',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'compass' : 'compass-outline'} size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="perfil/index"
                options={{
                    title: 'Mi Perfil',
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="eventos/[id]"
                options={{
                    href: null,
                }}
            />


        </Tabs>
    );
}