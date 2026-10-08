import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type AppHeaderProps = {
    title?: string;
    onCartPress?: () => void;
    onRefreshPress?: () => void;
    onSharePress?: () => void;
    onSearchPress?: () => void;
};

export default function AppHeader({
                                      title = 'SportMatch',
                                      onCartPress,
                                      onRefreshPress,
                                      onSharePress,
                                      onSearchPress,
                                  }: AppHeaderProps) {
    return (
        <>
            <View className="flex-row items-center justify-between px-4 pt-12 pb-3 bg-white">

                {/* Título */}
                <Text className="text-xl font-bold text-gray-900">
                    {title}
                </Text>

                {/* Acciones */}
                <View className="flex-row items-center gap-4">

                    <TouchableOpacity onPress={onCartPress}>
                        <MaterialIcons
                            name="shopping-cart"
                            size={24}
                            color="#111827"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onRefreshPress}>
                        <MaterialIcons
                            name="refresh"
                            size={24}
                            color="#111827"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onSharePress}>
                        <MaterialIcons
                            name="share"
                            size={24}
                            color="#111827"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onSearchPress}>
                        <MaterialIcons
                            name="search"
                            size={24}
                            color="#111827"
                        />
                    </TouchableOpacity>

                </View>
            </View>

            {/* Línea divisora */}
            <View className="h-px bg-gray-200" />
        </>
    );
}