import { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";
import useLoading  from "../../hooks/useLoading";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ welcome }) => {
    const [productos, setProductos] = useState([]);
    const {loading, mostrarLoading, ocultarLoading, loadingScreen} = useLoading ()
    const {categoria} =useParams()

    console.log(categoria)

    useEffect(() => {
        mostrarLoading ();

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
                ocultarLoading();
            });
    }, [categoria]);

    return (
        <>
            {loading ? ( /* si loading=true muestra nuestra pantalla de carga */
                loadingScreen
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
