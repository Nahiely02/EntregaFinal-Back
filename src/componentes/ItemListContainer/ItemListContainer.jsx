import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {MoonLoader} from "react-spinners"
import {collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "../ItemList/ItemList";
import db from "../../db/db";

import "./ItemListContainer.scss";

const ItemListContainer = ({ welcome }) => {
    const [productos, setProductos] = useState([]);
    const [loading, mostrarLoading] = useState (true);
    
    const {categoria} =useParams();

    useEffect(() => {
        mostrarLoading(true);

        let consulta;
        const productosRef = collection(db, "productos");

        if(categoria){
            //filtrar data por categoria, precio, nombre, etc (por precio: where("precio", ">", 15000) )
            consulta = query(productosRef, where("categoria", "==", categoria))
        }else{
            //traer toda la data
            consulta = productosRef;
        }

        getDocs(consulta)
            .then((respuesta) =>{
                let productosDb = respuesta.docs.map((producto) =>{
                    return {id: producto.id, ...producto.data() };
                });
                setProductos(productosDb);
            })
            .catch((error) => console.log(error))
            .finally(() => mostrarLoading(false) )

    }, [categoria]);

    return (
        <>
            {loading ? ( 
            <span className="loading">
                <MoonLoader color="#159c60" />
            </span>
                
            ) : (
                <div className ="ItemListContainer">
                    <p>{welcome}</p>
                    <ItemList productos = {productos}/>
                </div>
            )}
        </>
    );
};

export default ItemListContainer;
