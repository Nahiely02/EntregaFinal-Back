import { useState, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.scss";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {

  const [toggle, setToggle] =useState(false)
  const {setProducto} = useContext(CartContext)

  const setCart =(contador) =>{
      const productoNew = {...producto, cantidad: contador};
      setProducto(productoNew)
      setToggle(true)
  };



  return (
    <section className="item-detail">
        <img className="img" src={producto.imagen} alt={producto.nombre}></img>
        <div className="text">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          {toggle ? (
            <>
              <Link className="btn-finalizar" to="/cart">Finalizar compra</Link> {/* esto no lleva a nada  */}
              <Link className="btn-finalizar" to="/">Seguir comprando</Link>
            </>
            ) : (
              <ItemCount stock={producto.stock} setCart={setCart}/>
            )}
        </div>
    
    </section>
  );
};
export default ItemDetail