import { useState } from "react";
import { Link } from "react-router-dom";

import "./Item.scss";

export const Item = ({producto}) => {
  const [zoom, setZoom] = useState(false)

  const handleMouseOver = () =>{
    setZoom(true)
  }

  const handleMouseLeave = () =>{
    setZoom(false)
  }

  const styleCard ={
    transform: zoom ? 'scale(1.1)' : 'scale(1)', 
    transition: 'transform 0.3s'
  }

  return (
      <div className="card" 
      onMouseOver={handleMouseOver} 
      onMouseLeave={handleMouseLeave}
      style={styleCard}>

        <img className="image-card" src={producto.imagen} alt={producto.nombre}/>
        <p className="titulo">{producto.nombre}</p>
        <Link to={`/detalle/${producto.id}`} className="btn btn-secondary btn-sm">Ver detalles</Link>
        <p className="precio">Precio: ${producto.precio} </p>
      </div>
  )
}

export default Item;