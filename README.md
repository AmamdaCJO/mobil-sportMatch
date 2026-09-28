# SportMatch

**SportMatch** es una plataforma tecnológica integral y una red social gamificada diseñada para la comunidad de entusiastas de los deportes al aire libre (Running, Hiking, Trail).

Conecta a deportistas locales, gamifica su progreso mediante insignias y proporciona a los organizadores de eventos un potente SaaS para la gestión automatizada y el seguimiento GPS en tiempo real de sus participantes.

---

## Características Principales

### Para la Comunidad (Corredores y Senderistas)
* **Onboarding Inteligente:** Perfilamiento inicial basado en preferencias, nivel de experiencia y métricas corporales.
* **Feed de Eventos:** Descubre carreras, caminatas grupales y retos locales con mapas de ruta y niveles de dificultad.
* **Vitrina de Logros:** Sistema de gamificación que otorga *Insignias* automáticas al validar rutas completadas por GPS.
* **SportShorts (Reels):** Sección estilo TikTok para compartir videos cortos de rutas, paisajes y entrenamientos.
* **Social & Match:** Conecta con amigos, organiza salidas y utiliza dinámicas lúdicas como la "Cartulina Digital" para interactuar con la comunidad.

### Para Organizadores (SaaS B2B)
* **Gestión de Eventos:** Creación de rutas, descripción, dificultad y gestión de inscripciones sin papel.
* **Live Tracking & Seguridad:** Monitoreo en tiempo real de todos los participantes durante la carrera mediante GPS, con alertas de retraso o desvío de ruta.
* **Pase de Lista Digital:** Automatización de la asistencia mediante validación GPS o código QR.

---

## Stack Tecnológico

**Frontend (Aplicación Móvil)**
* [React Native](https://reactnative.dev/) - Framework multiplataforma
* [Expo](https://expo.dev/) - SDK y herramientas de desarrollo
* [Expo Router](https://docs.expo.dev/router/introduction/) - Enrutamiento basado en archivos (File-based routing)
* [NativeWind](https://www.nativewind.dev/) - Tailwind CSS para React Native
* [Zustand](https://github.com/pmndrs/zustand) / Context API - Manejo de estados globales

**Backend & Servicios Externos (API Independiente)**
* Node.js + Express / NestJS
* Socket.io (WebSockets para tracking en vivo)
* PostgreSQL + PostGIS (Geolocalización)
* JWT (JSON Web Tokens) para autenticación segura

---

## Arquitectura del Proyecto

El proyecto sigue una arquitectura **Feature-Based** escalable, combinando un menú lateral (`Drawer`) con pestañas inferiores (`Bottom Tabs`):

```text
SportMatch/
├── assets/                         # Recursos estáticos locales
│   ├── fonts/                      # Fuentes personalizadas (Inter, JetBrainsMono)
│   ├── icons/                      # Iconos de la app (favicon, adaptive-icon)
│   └── images/                     # Imágenes fijas (logo, placeholders de perfil, fondos)
│
├── scripts/                        # Scripts de automatización
│   ├── setup-env.js                # Script para validar variables de entorno
│   └── build-apk.sh                # Script bash para automatizar la compilación a Android
│
├── src/                            # CÓDIGO FUENTE PRINCIPAL
│   │
│   ├── api/                        # Capa de red (Conexión con Node.js)
│   │   ├── client.ts               # Instancia de Axios con interceptores (inyecta Token JWT)
│   │   └── endpoints/              # Rutas separadas por dominio
│   │       ├── auth.api.ts         # Peticiones de login y registro
│   │       ├── events.api.ts       # Peticiones para obtener o crear eventos
│   │       └── users.api.ts        # Peticiones para perfil, subir videos y buscar amigos
│   │
│   ├── components/                 # Componentes de Interfaz (Bloques reutilizables)
│   │   ├── ui/                     # Elementos genéricos
│   │   │   ├── CustomButton.tsx
│   │   │   ├── FormInput.tsx
│   │   │   └── Spinner.tsx
│   │   ├── eventos/                # Tarjetas y mapas
│   │   │   ├── EventCard.tsx
│   │   │   └── MapPreview.tsx
│   │   ├── perfil/                 # Elementos del perfil de usuario
│   │   │   ├── InsigniaCard.tsx
│   │   │   ├── VideoThumbnail.tsx
│   │   │   └── FriendListItem.tsx
│   │   └── shorts/                 # Elementos estilo TikTok
│   │       └── VideoPlayer.tsx
│   │
│   ├── constants/                  # Variables estáticas y de configuración
│   │   ├── theme.ts                # Colores (Verde Bosque: #0D5C3B, Naranja: #F97316)
│   │   └── config.ts               # URLs de la API (Desarrollo vs Producción)
│   │
│   ├── context/                    # Estados Globales (React Context)
│   │   └── AuthContext.tsx         # Mantiene la sesión viva en toda la app
│   │
│   ├── hooks/                      # Lógica compleja encapsulada
│   │   ├── useAuth.ts              # Hook para leer sesión y datos del usuario
│   │   ├── useLocation.ts          # Hook para encender GPS, permisos y tracking
│   │   ├── useCamera.ts            # Hook para grabar los Shorts/Videos
│   │   └── useStopwatch.ts         # Cronómetro para la carrera
│   │
│   ├── utils/                      # Funciones de ayuda
│   │   ├── formatters.ts           # Formatear fechas y horas (Ej. "00:05:23")
│   │   └── geoCalculations.ts      # Calcular distancia recorrida en base a GPS
│   │
│   └── app/                        # NAVEGACIÓN Y PANTALLAS (Expo Router)
│       ├── _layout.tsx             # Layout Raíz (Inyecta NativeWind y AuthContext)
│       ├── index.tsx               # Pantalla de carga (Decide si va a Login o a Home)
│       ├── +not-found.tsx          # Pantalla genérica de error de ruta
│       │
│       ├── (auth)/                 # MÓDULO AUTENTICACIÓN (Pantalla Completa)
│       │   ├── login.tsx          
│       │   └── register.tsx       
│       │
│       ├── onboarding/             # MÓDULO ENCUESTA (6 Pasos secuenciales)
│       │   ├── step1.tsx           # Actividad preferida
│       │   ├── step2.tsx           # Edad
│       │   ├── step3.tsx           # Horas al día
│       │   ├── step4.tsx           # Días a la semana
│       │   ├── step5.tsx           # Peso / Talla
│       │   └── step6.tsx           # Finalizar y guardar en Node.js
│       │
│       ├── (drawer)/               # MENÚ LATERAL (Hamburguesa)
│       │   ├── _layout.tsx         # Configuración del menú que se desliza
│       │   ├── configuracion.tsx   # Opción de Ajustes (Exclusiva del menú lateral)
│       │   ├── ayuda.tsx           # Opción de Soporte (Exclusiva del menú lateral)
│       │   │
│       │   └── (tabs)/             # BARRA INFERIOR (Bottom Tabs)
│       │       ├── _layout.tsx     # Configuración de los 5 botones y el botón Header para el Drawer
│       │       │
│       │       ├── home/           # PESTAÑA 1: Inicio
│       │       │   └── index.tsx   # Resumen del día, noticias
│       │       │
│       │       ├── comunidad/      # PESTAÑA 2: Comunidad
│       │       │   └── index.tsx   # Foros, grupos, cartulinas
│       │       │
│       │       ├── shorts/         # PESTAÑA 3: Videos cortos
│       │       │   └── index.tsx   # Scroll vertical infinito
│       │       │
│       │       ├── eventos/        # PESTAÑA 4: Eventos
│       │       │   ├── index.tsx   # Feed con filtros (Running, Hiking)
│       │       │   └── [id].tsx    # Mapa en vivo e información de un evento específico
│       │       │
│       │       └── perfil/         # PESTAÑA 5: Perfil
│       │           └── index.tsx   # Vista que maneja: Insignias, Subir/Ver Videos, Amigos y Pendientes
│       │
│       ├── chat/                   # MENSAJERÍA DIRECTA (Pantalla completa, tapa los tabs)
│       │   └── [id].tsx            # Chat privado con un amigo
│       │
│       └── organizer/              # HERRAMIENTAS DE GUÍA (Pantalla completa)
│           └── create-event.tsx    # Pantalla para trazar rutas y publicar un nuevo evento
│
├── .gitignore
├── app.json                        # Configuración de Expo (Icono, Splash screen, Permisos GPS)
├── babel.config.js                 # Configuración de transpilación (Requerido por NativeWind)
├── metro.config.js                 # Empaquetador de React Native
├── nativewind-env.d.ts             # Tipados de Tailwind para TypeScript
├── package.json                    # Dependencias del proyecto
├── tailwind.config.js              # Sistema de diseño de colores y utilidades
└── tsconfig.json                   # Configuración estricta de TypeScript
``` 

sdf