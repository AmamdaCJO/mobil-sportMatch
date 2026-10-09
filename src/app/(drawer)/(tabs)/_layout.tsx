import {Tabs, useNavigation} from 'expo-router';
import {TouchableOpacity, View, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {DrawerActions} from 'expo-router/react-navigation';
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";

export default function TabsLayout() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    const Header = () => (
        <View
            style={{
                height: 56 + insets.top,
                paddingTop: insets.top,
                backgroundColor: '#FFFFFF',
            }}
            className="flex-row items-center"
        >

                {/* BOTÓN MENÚ */}
                <TouchableOpacity
                    className="ml-4 p-2"
                    onPress={() =>
                        navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                >
                    <Ionicons
                        name="menu"
                        size={28}
                        color="#0F172A"
                    />
                </TouchableOpacity>

                {/* TÍTULO */}
                <View className="ml-5 flex-1">
                    <Text className="text-xl font-bold text-gray-900">
                        SportMatch
                    </Text>
                </View>

                {/* ICONOS */}
                <View className="flex-row items-center mr-4">

                    <TouchableOpacity className="ml-4">
                        <Ionicons
                            name="cart-outline"
                            size={23}
                            color="#111827"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity className="ml-4">
                        <Ionicons
                            name="refresh-outline"
                            size={23}
                            color="#111827"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity className="ml-4">
                        <Ionicons
                            name="share-outline"
                            size={23}
                            color="#111827"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity className="ml-4">
                        <Ionicons
                            name="search-outline"
                            size={23}
                            color="#111827"
                        />
                    </TouchableOpacity>

                </View>
            </View>
            );

            return (
            <Tabs
                screenOptions={{
                    headerShown: true,
                    header: () => <Header/>,

                    headerShadowVisible: false,

                    tabBarActiveTintColor: '#0D5C3B',
                    tabBarInactiveTintColor: '#64748B',

                    tabBarStyle: {
                        height: 65 + insets.bottom,
                        paddingBottom: 10 + insets.bottom,
                        paddingTop: 10,

                        backgroundColor: '#FFFFFF',

                        borderTopWidth: 1,
                        borderTopColor: '#F1F5F9',
                    },

                    tabBarLabelStyle: {
                        fontSize: 11,
                        fontWeight: '600',
                    },
                }}
            >

                <Tabs.Screen
                    name="home/index"
                    options={{
                        title: 'SportMatch',
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color, focused}) => (
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="comunidad/index"
                    options={{
                        title: 'Comunidad',
                        tabBarLabel: 'Comunidad',
                        tabBarIcon: ({color, focused}) => (
                            <Ionicons
                                name={focused ? 'people' : 'people-outline'}
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="shorts/index"
                    options={{
                        title: 'SportShorts',
                        tabBarLabel: 'Shorts',
                        tabBarIcon: ({color, focused}) => (
                            <Ionicons
                                name={focused ? 'play-circle' : 'play-circle-outline'}
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="eventos/index"
                    options={{
                        title: 'Explorar',
                        tabBarLabel: 'Eventos',
                        tabBarIcon: ({color, focused}) => (
                            <Ionicons
                                name={focused ? 'compass' : 'compass-outline'}
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="perfil"
                    options={{
                        title: 'Mi Perfil',
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({color, focused}) => (
                            <Ionicons
                                name={focused ? 'person' : 'person-outline'}
                                size={24}
                                color={color}
                            />
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