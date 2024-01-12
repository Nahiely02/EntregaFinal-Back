import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.scss";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {
  const [toggle, setToggle] =useState(false)


  const setCart =(contador) =>{
      console.log(contador)
      setToggle(true)
  };

  return (
    <section className="item-detail">
        <img className="img" src={producto.imagen} alt={producto.nombre}></img>
        <div className="text">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          {
            toggle ? (
              <Link to="/cart">Finalizar compra</Link>
            ) : (
              <ItemCount stock={producto.stock} setCart={setCart}/>
            )}
        </div>
    
    </section>
  );
};
export default ItemDetail