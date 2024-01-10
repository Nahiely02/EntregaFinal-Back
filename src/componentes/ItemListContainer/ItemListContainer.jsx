import { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";
import {MoonLoader} from "react-spinners"
import { useParams } from "react-router-dom";


const ItemListContainer = ({ welcome }) => {
    const [productos, setProductos] = useState([]);
    const [loading, mostrarLoading] = useState (true);
    const {categoria} =useParams()

    console.log(categoria)

    useEffect(() => {
        mostrarLoading(true)

        obtenerProductos()
            .then((respuesta) => {
                if(categoria){
                    const productosFiltrados = respuesta.filter((producto) => producto.categoria === categoria)
                    setProductos(productosFiltrados)
                }else{
                    setProductos(respuesta);
                }
                console.log(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                mostrarLoading(false);
            });
    }, [categoria]);

    return (
        <>
            {loading ? ( /* si loading=true muestra nuestra pantalla de carga */
            <span className="loading">
                <MoonLoader color="#159c60" />
            </span>
                
            ) : (
                <div className ="ItemListContainer">
                    <p>{welcome}</p>
                    <ItemList productos ={productos}/>
                </div>
            )}
        </>
    );
};

export default ItemListContainer;
