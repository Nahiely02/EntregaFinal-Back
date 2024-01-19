import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import db from '../../db/db';

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({});
    const [productoExiste, setProductoExiste] = useState(false)
    const { id } =useParams(); 


    useEffect(() => {
        const productoRef = doc(db, "productos", id);
        getDoc(productoRef)
            .then((respuesta)=> {
                const productoDb = {id: respuesta.id, ...respuesta.data()}
                if(!respuesta.exists()) {
                    setProductoExiste(true)
                }
                setProducto(productoDb);
            })
            .catch((error) => console.log(error))
    }, [id]);


    return (
        <div>
        {productoExiste ? (
                <div className='error404'>
                    <h3>404 - Not found</h3>
                </div>
            ) : (
                <ItemDetail producto = {producto}/>
            )}
    </div>
    )
}
export default ItemDetailContainer