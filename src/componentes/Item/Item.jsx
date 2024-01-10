import "./Item.scss"
import { Link } from "react-router-dom";

export const Item = ({producto}) => {
  return (
      <div className="card">
        <img className="image-card" src={producto.imagen} alt={producto.nombre}/>
        <p className="titulo">{producto.nombre}</p>
        <Link to={`/detalle/${producto.id}`} className="btn btn-secondary btn-sm">Ver detalles</Link>
        <p className="precio">Precio: ${producto.precio} </p>
      </div>
  )
}

export default Item;