export const MOCK_USER = {
    nombre: 'Omar',
    metaSemanal: 15,
    kmActuales: 8.5,
    fotoPerfil: 'https://placehold.co/100',
};

export const MOCK_PROXIMO_EVENTO = {
    id: 'e_123',
    titulo: 'Hiking Nocturno Volcán',
    dia: '01',
    mes: 'JUN',
    hora: '06:30 PM',
    ciudad: 'Toluca, MEX',
    imagen: 'https://placehold.co/400x200',
};

export const MOCK_RUTAS_RECOMENDADAS = [
    { id: 'ruta_1', titulo: 'Sendero Verde',   nivel: 'Principiante', distancia: 5,  imagen: 'https://placehold.co/200x120' },
    { id: 'ruta_2', titulo: 'Ruta del Bosque', nivel: 'Intermedio',   distancia: 8,  imagen: 'https://placehold.co/200x120' },
    { id: 'ruta_3', titulo: 'Cerro Norte',     nivel: 'Avanzado',     distancia: 12, imagen: 'https://placehold.co/200x120' },
];

export const CATEGORIAS_EVENTOS = ['Ciclismo', 'Running', 'Hiking', 'Basketball'] as const;