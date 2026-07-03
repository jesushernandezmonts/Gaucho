export const menuItems = [
  {
    category: "entradas",
    items: [
      { name: "Empanadas Criollas", price: 189, desc: "Clásicas empanadas de carne cortada a cuchillo, huevo, aceitunas y especias", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&q=80" },
      { name: "Provoleta a la Parrilla", price: 225, desc: "Queso provolone grillado con orégano, tomates cherrys y chimichurri", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=200&q=80" },
      { name: "Chorizo Criollo", price: 169, desc: "Chorizo artesanal parrillero con salsa criolla", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=200&q=80" },
    ],
  },
  {
    category: "carnes",
    items: [
      { name: "Bife de Chorizo", price: 459, desc: "Corte premium de 400g asado a la parrilla con guarnición", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=80" },
      { name: "Asado de Tira", price: 399, desc: "Tira de asado braseada lentamente hasta alcanzar la textura perfecta", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=200&q=80" },
      { name: "Matambre a la Pizza", price: 349, desc: "Matambre tierno cubierto con salsa, mozzarella y orégano", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200&q=80" },
    ],
  },
  {
    category: "pastas",
    items: [
      { name: "Sorrentinos Jamón y Queso", price: 279, desc: "Pasta artesanal rellena con salsa rosa y parmesano", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&q=80" },
      { name: "Ñoquis de Papa", price: 239, desc: "Ñoquis caseros con salsa bolognesa o manteca y salvia", image: "https://images.unsplash.com/photo-1556760544-74068565f05c?w=200&q=80" },
    ],
  },
  {
    category: "postres",
    items: [
      { name: "Flan Casero", price: 149, desc: "Flan tradicional argentino con dulce de leche y crema", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80" },
      { name: "Panqueques con DDL", price: 169, desc: "Panqueques finos bañados en dulce de leche, espolvoreados con azúcar glass", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80" },
    ],
  },
  {
    category: "vinos",
    items: [
      { name: "Malbec Reserva", price: 590, desc: "Notas a frutos rojos, ciruela y un toque de roble. Cuerpo completo", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=80" },
      { name: "Cabernet Sauvignon", price: 640, desc: "Taninos firmes con notas a cassis, pimiento y chocolate amargo", image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=200&q=80" },
    ],
  },
]

export const rooms = [
  {
    name: "Habitación Gaucha",
    badge: "Popular",
    badgeColor: "bg-gold/20 text-gold-dark",
    capacity: "2 Personas",
    features: ["WiFi", "Clima"],
    desc: "Habitación decorada con estilo rústico argentino, cama king size y vistas al jardín.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
    featured: false,
  },
  {
    name: "Suite Patagonia",
    badge: "Recomendada",
    badgeColor: "bg-gold text-chocolate",
    capacity: "4 Personas",
    features: ["WiFi", "Jacuzzi", "Smart TV"],
    desc: "Nuestra suite más lujosa con sala de estar, jacuzzi privado y terraza con vista panorámica.",
    price: 4299,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    featured: true,
  },
  {
    name: "Habitación Pampa",
    badge: "Económica",
    badgeColor: "bg-sage/20 text-sage-dark",
    capacity: "2 Personas",
    features: ["WiFi", "Clima"],
    desc: "Cómoda habitación con diseño minimalista, perfecta para viajeros que buscan confort.",
    price: 1899,
    image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=600&q=80",
    featured: false,
  },
]

export const testimonials = [
  {
    text: "Una experiencia inolvidable. La comida es exquisita, el servicio impecable y las habitaciones son una verdadera obra de arte.",
    author: "María García",
    role: "Visitante frecuente",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    text: "El mejor asado que he probado fuera de Argentina. El malbec recomendado por el chef fue el maridaje perfecto.",
    author: "Carlos Mendoza",
    role: "Viajero gastronómico",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    text: "Pasamos nuestra luna de miel en la Suite Patagonia y fue mágico. El jacuzzi con vista al atardecer, la cena íntima... todo perfecto.",
    author: "Ana & Luis Torres",
    role: "Luna de miel",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
]

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Restaurante", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80", alt: "Cortes Premium", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", alt: "Habitaciones", span: "" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Alta Cocina", span: "" },
  { src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80", alt: "Jardines", span: "" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", alt: "Barra de Vinos", span: "" },
]

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#galeria", label: "Galería" },
]
