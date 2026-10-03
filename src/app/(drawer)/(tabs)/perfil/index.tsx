import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

// Tipo de cada sección disponible
type Seccion = 'insignias' | 'videos' | 'amigos' | 'eventos';

export default function Perfil() {
  // Sección activa (por defecto: insignias)
  const [seccionActiva, setSeccionActiva] = useState<Seccion>('insignias');

  // ===== DATOS SIMULADOS =====

  const insignias = [
    { id: 1, nombre: 'Primer partido', icono: 'sports-soccer', color: '#2563eb' },
    { id: 2, nombre: '10 partidos', icono: 'military-tech', color: '#f59e0b' },
    { id: 3, nombre: 'MVP', icono: 'star', color: '#eab308' },
    { id: 4, nombre: 'Racha 5', icono: 'local-fire-department', color: '#dc2626' },
  ];

  const videos = [
    { id: 1, titulo: 'Golazo vs Tigres', duracion: '0:45', vistas: '1.2K' },
    { id: 2, titulo: 'Jugada defensiva', duracion: '0:30', vistas: '860' },
    { id: 3, titulo: 'Entrenamiento libre', duracion: '2:10', vistas: '540' },
  ];

  const amigos = [
    { id: 1, nombre: 'Carlos Ruiz', avatar: 'https://i.pravatar.cc/100?img=3' },
    { id: 2, nombre: 'Lucía Fernández', avatar: 'https://i.pravatar.cc/100?img=5' },
    { id: 3, nombre: 'Diego Torres', avatar: 'https://i.pravatar.cc/100?img=8' },
    { id: 4, nombre: 'Marta López', avatar: 'https://i.pravatar.cc/100?img=9' },
  ];

  const eventos = [
    { id: 1, nombre: 'Torneo relámpago', fecha: '12 Nov', hora: '18:00' },
    { id: 2, nombre: 'Amistoso vs Rivales', fecha: '20 Nov', hora: '20:30' },
    { id: 3, nombre: 'Final de temporada', fecha: '30 Nov', hora: '17:00' },
  ];

  // ===== RENDER DINÁMICO DEL CONTENIDO =====

  const renderContenido = () => {
    if (seccionActiva === 'insignias') {
      return (
        <View className="flex-row flex-wrap justify-between">
          {insignias.map((insignia) => (
            <View
              key={insignia.id}
              className="w-[48%] bg-gray-50 rounded-2xl p-4 items-center mb-3"
            >
              <View
                className="w-14 h-14 rounded-full items-center justify-center"
                style={{ backgroundColor: insignia.color + '20' }}
              >
                <MaterialIcons
                  name={insignia.icono as any}
                  size={28}
                  color={insignia.color}
                />
              </View>
              <Text className="text-sm font-semibold text-gray-800 mt-3 text-center">
                {insignia.nombre}
              </Text>
            </View>
          ))}
        </View>
      );
    }

    if (seccionActiva === 'videos') {
      return (
        <View>
          {videos.map((video) => (
            <TouchableOpacity
              key={video.id}
              className="flex-row items-center bg-gray-50 rounded-2xl p-3 mb-3"
            >
              <View className="w-24 h-16 bg-gray-300 rounded-xl items-center justify-center">
                <MaterialIcons name="play-circle-filled" size={32} color="#fff" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-sm font-semibold text-gray-800">
                  {video.titulo}
                </Text>
                <Text className="text-xs text-gray-400 mt-1">
                  {video.duracion} · {video.vistas} vistas
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    if (seccionActiva === 'amigos') {
      return (
        <View>
          {amigos.map((amigo) => (
            <View
              key={amigo.id}
              className="flex-row items-center bg-gray-50 rounded-2xl p-3 mb-3"
            >
              <Image
                source={{ uri: amigo.avatar }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="ml-3 flex-1 text-sm font-semibold text-gray-800">
                {amigo.nombre}
              </Text>
              <TouchableOpacity>
                <MaterialIcons name="person-add" size={22} color="#2563eb" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    }

    if (seccionActiva === 'eventos') {
      return (
        <View>
          {eventos.map((evento) => (
            <View
              key={evento.id}
              className="flex-row items-center bg-gray-50 rounded-2xl p-4 mb-3"
            >
              <View className="w-14 h-14 bg-blue-100 rounded-xl items-center justify-center">
                <MaterialIcons name="event" size={26} color="#2563eb" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-sm font-semibold text-gray-800">
                  {evento.nombre}
                </Text>
                <Text className="text-xs text-gray-400 mt-1">
                  {evento.fecha} · {evento.hora}
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color="#9ca3af" />
            </View>
          ))}
        </View>
      );
    }
  };

  // ===== ESTILO DE PESTAÑAS DEL MENÚ DE SECCIONES =====

  const tabStyle = (activa: boolean) =>
    activa
      ? 'text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-1'
      : 'text-sm text-gray-500 pb-1';

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ===== MENÚ SUPERIOR ===== */}
        <View className="flex-row items-center justify-between px-4 pt-12 pb-3 bg-white">
          <Text className="text-xl font-bold text-gray-900">SportMatch</Text>

          <View className="flex-row items-center gap-4">
            <TouchableOpacity>
              <MaterialIcons name="shopping-cart" size={24} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="refresh" size={24} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="share" size={24} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="search" size={24} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Línea divisora */}
        <View className="h-px bg-gray-200" />

        {/* ===== CABECERA DE PERFIL ===== */}
        <View className="flex-row items-center px-4 pt-6">
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            className="w-20 h-20 rounded-full"
          />
          <View className="ml-4 flex-1">
            <Text className="text-lg font-bold text-gray-900">
              Amanda García López
            </Text>
            <Text className="text-sm text-gray-400 mt-1">@amanda_garcia</Text>
          </View>
        </View>

        {/* ===== CONTADORES ===== */}
        <View className="flex-row items-center justify-center mt-6">
          <View className="items-center px-8">
            <Text className="text-lg font-bold text-gray-900">128</Text>
            <Text className="text-xs text-gray-500 mt-1">Seguidores</Text>
          </View>
          <View className="w-px h-10 bg-gray-200" />
          <View className="items-center px-8">
            <Text className="text-lg font-bold text-gray-900">86</Text>
            <Text className="text-xs text-gray-500 mt-1">Seguidos</Text>
          </View>
        </View>

        {/* ===== BOTÓN EDITAR PERFIL ===== */}
        <View className="items-center mt-6 px-4">
          <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 rounded-full px-6 py-2.5">
            <MaterialIcons name="edit" size={18} color="#111827" />
            <Text className="ml-2 text-gray-900 font-semibold text-sm">
              Editar perfil
            </Text>
          </TouchableOpacity>
        </View>

        {/* ===== MENÚ DE SECCIONES ===== */}
        <View className="flex-row justify-around mt-8 px-4">
          <TouchableOpacity
            onPress={() => setSeccionActiva('insignias')}
            className="items-center"
          >
            <Text className={tabStyle(seccionActiva === 'insignias')}>
              Mis insignias
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSeccionActiva('videos')}
            className="items-center"
          >
            <Text className={tabStyle(seccionActiva === 'videos')}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSeccionActiva('amigos')}
            className="items-center"
          >
            <Text className={tabStyle(seccionActiva === 'amigos')}>Amigos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSeccionActiva('eventos')}
            className="items-center"
          >
            <Text className={tabStyle(seccionActiva === 'eventos')}>
              Eventos
            </Text>
          </TouchableOpacity>
        </View>

        {/* ===== CONTENIDO DINÁMICO ===== */}
        <View className="mt-6 px-4">{renderContenido()}</View>

        {/* Espacio inferior */}
        <View className="h-8" />
      </ScrollView>

      {/* Línea divisora */}
      <View className="h-px bg-gray-200" />

      {/* ===== MENÚ INFERIOR ===== */}
      <View className="flex-row justify-around items-center py-3 bg-white">
        <TouchableOpacity className="items-center">
          <MaterialIcons name="home" size={24} color="#2563eb" />
          <Text className="text-xs text-blue-600 mt-1">Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="public" size={24} color="#9ca3af" />
          <Text className="text-xs text-gray-400 mt-1">Comunidad</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="ondemand-video" size={24} color="#9ca3af" />
          <Text className="text-xs text-gray-400 mt-1">Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="event" size={24} color="#9ca3af" />
          <Text className="text-xs text-gray-400 mt-1">Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="settings" size={24} color="#9ca3af" />
          <Text className="text-xs text-gray-400 mt-1">Configuración</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}