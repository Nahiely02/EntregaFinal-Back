import { useState, useEffect } from "react";
import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ welcome }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {
                console.log(respuesta);
                setProductos(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('Finalizó la promesa');
            });

    }, []);

    return (
        <div id="ItemListContainer">
            <p>{welcome}</p>
            <ItemList productos ={productos}/>
        </div>
    );
};

export default ItemListContainer;
