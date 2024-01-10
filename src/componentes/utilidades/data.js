import ItemListContainer from "../ItemListContainer/ItemListContainer";

const productos = [
    {
        id: 'ab00000',
        nombre: 'Mate De Acero Inoxidable Térmico Doble Capa',
        descripcion: 'Doble capa de acero. En el interior una pared aislante que no transmite el calor. La compañía perfecta',
        stock: 6,
        precio: 45000,
        imagen: "../img/imgCards/mate acero AFA copia.webp",
        categoria: 'mates'
    },
    {
        id: 'ab00001',
        nombre: 'Mate De Madera Imperial , Virola De Alpaca',
        descripcion: 'Elaborado con auténtica madera de algarrobo e incluye una virola de alpaca',
        stock: 5,
        precio: 50000,
        imagen: "../img/imgCards/mate imperial madera.webp",
        categoria: 'mates'
    },
    {
        id: 'ab00002',
        nombre: 'Mate camionero algarrobo 4 patas',
        descripcion: 'Mate madera de Algarrobo, camionero forrado en cuero - Artesanal. No necesita curado, puede utilizarse para mate amargo o dulce sin afectar su sabor original.',
        stock: 20,
        precio: 17000,
        imagen: "../img/imgCards/mate camionero algarrobo.webp",
        categoria: 'mates'
    },
    {
        id: 'ab00003',
        nombre: 'Mate Térmico Clásico Explorer Apolo 193 Ml Acero Inoxidable',
        descripcion: 'Mate compacto, cómodo y fabricado con materiales de primerísima calidad.Ideal para campping',
        stock: 2,
        precio: 18000,
        imagen: "../img/imgCards/mate termico explorer.webp",
        categoria: 'mates'
    },
    {
        id: 'ab00004',
        nombre: 'Mate Acero Inoxidable',
        descripcion: 'Este mate ofrece durabilidad y fácil limpieza. Disfruta tu mate caliente por más tiempo',
        stock: 8,
        precio: 35000,
        imagen: "../img/imgCards/mate acero inoxidable.webp",
        categoria: 'mates'
    },
    {
        id: 'ab00005',
        nombre: 'Termo Acero Inoxidable',
        descripcion: 'Termo acero con manija y pico cebador. Capacidad 1 litro Mantiene bebidas calientes por 8hs.',
        stock: 5,
        precio: 20000,
        imagen: "../img/imgCards/termo acero inoxidable.webp",
        categoria: 'termos'
    },
    {
        id: 'ab00006',
        nombre: 'Termo Acero Inoxidable frio-calor',
        descripcion: 'Termo con capacidad 1 litro. Conserva la temperatura por 24 hs Calor/Frio.',
        stock: 10,
        precio: 26000,
        imagen: "../img/imgCards/termo acero inoxidable frio-calor.webp",
        categoria: 'termos'
    },
    {
        id: 'ab00007',
        nombre: 'Termo Discovery Acero Inoxidable ',
        descripcion: 'Termo con capacidad 750ml . Interior Acero Inoxidable Doble Capa. Calor/Frio .',
        stock: 8,
        precio: 21000,
        imagen: "../img/imgCards/termo discovery acero inoxidable .webp",
        categoria: 'termos'
    },
    {
        id: 'ab00008',
        nombre: 'Termo lumilagro Acero Inoxidable AFA',
        descripcion: 'Termo campeones del mundo con capacidad 1L . Interior Acero Inoxidable. Temperatura justa.',
        stock: 5,
        precio: 38000,
        imagen: "../img/imgCards/termo lumilagro acero inoxidable AFA.webp",
        categoria: 'termos'
    },
    {
        id: 'ab00009',
        nombre: 'Termo Stanley clasico Acero Inoxidable',
        descripcion: 'Termo Stanley clasico capacidad 1.4L . Interior Acero Inoxidable con sistema de vacio.',
        stock: 5,
        precio: 58000,
        imagen: "../img/imgCards/termo stanley clasico acero inoxidable.webp",
        categoria: 'termos'
    },
    {
        id: 'ab00010',
        nombre: 'Matera de cuero',
        descripcion: 'Canasta matera confeccionada íntegramente en cuero grupon de 6mm de espesor. 1ra calidad.Cabe perfectamente termo, mate, azucarero y yerbero.',
        stock: 5,
        precio: 42000,
        imagen: "../img/imgCards/matera de cuero.webp",
        categoria: 'materas'
    },
    {
        id: 'ab00011',
        nombre: 'Matera de cuero premium',
        descripcion: 'Canasta matera confeccionada íntegramente en cuero grupon de 8mm de espesor. 1ra calidad..Cabe perfectamente termo, mate, azucarero y yerbero.',
        stock: 5,
        precio: 50000,
        imagen: "../img/imgCards/matera de cuero premium.webp",
        categoria: 'materas'
    },
    {
        id: 'ab00012',
        nombre: 'Matera de eco-cuero',
        descripcion: 'Matera forrado en eco cuero. Base de madera, con divisor flexible.',
        stock: 5,
        precio: 9000,
        imagen: "../img/imgCards/matera eco-cuero.webp",
        categoria: 'materas'
    },
    {
        id: 'ab00013',
        nombre: 'Yerba mate Playadito suave 1Kg',
        descripcion: 'Yerba mate Playadito suave con palo. Beneficios antioxidante.',
        stock: 20,
        precio: 4000,
        imagen: "../img/imgCards/yerba playadito suave.webp",
        categoria: 'yerbas'
    },
    {
        id: 'ab00014',
        nombre: 'Yerba mate Canarias tradicional 1Kg',
        descripcion: 'Yerba mate Canarias tradicional sin palo y con bajo contenido en polvo.',
        stock: 20,
        precio: 7000,
        imagen: "../img/imgCards/yerba canarias tradicional.webp",
        categoria: 'yerbas'
    },
    {
        id: 'ab00016',
        nombre: 'Yerba mate La Merced 500gr',
        descripcion: 'Yerba mate La Merced con palo. Beneficios antioxidante.',
        stock: 20,
        precio: 3200,
        imagen: "../img/imgCards/yerba la merced.webp",
        categoria: 'yerbas'
    },
];
const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};


export default obtenerProductos;   