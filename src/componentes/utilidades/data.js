import ItemListContainer from "../ItemListContainer/ItemListContainer";

const productos = [
    {
        id: 'ab00000',
        nombre: 'Mate De Acero Inoxidable Térmico Doble Capa',
        descripcion: 'Doble capa de acero. En el interior una pared aislante que no transmite el calor. La compañía perfecta',
        stock: 6,
        precio: 45000,
        imagen: "../img/imgCards/mate acero AFA.webp",
    },
    {
        id: 'ab00001',
        nombre: 'Mate De Madera Imperial , Virola De Alpaca',
        descripcion: 'Elaborado con auténtica madera de algarrobo e incluye una virola de alpaca',
        stock: 5,
        precio: 50000,
        imagen: "../img/imgCards/mate imperial madera.webp",
    },
    {
        id: 'ab00002',
        nombre: 'Mate Pampa Xl Imperial Plástico Térmico',
        descripcion: 'Fácil extraccion de yerba. No necesita curado. No genera hongos',
        stock: 20,
        precio: 12000,
        imagen: "../img/imgCards/mate pampa plastico.webp",
    },
    {
        id: 'ab00003',
        nombre: 'Mate Térmico Clásico Explorer Apolo 193 Ml Acero Inoxidable',
        descripcion: 'Mate compacto, cómodo y fabricado con materiales de primerísima calidad.Ideal para campping',
        stock: 2,
        precio: 18000,
        imagen: "../img/imgCards/mate termico explorer.webp",
    },
    {
        id: 'ab00004',
        nombre: 'Mate Acero Inoxidable',
        descripcion: 'Este mate ofrece durabilidad y fácil limpieza. Disfruta tu mate caliente por más tiempo',
        stock: 8,
        precio: 35000,
        imagen: "../img/imgCards/mate acero inoxidable.webp",
    }
];
const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};


export default obtenerProductos;   