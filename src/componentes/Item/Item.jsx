import "./Item.scss"

export const Item = ({producto}) => {
  return (
      <div className="card">
        <img className="image-card" src={producto.imagen} alt={producto.nombre}/>
        <p>{producto.nombre}</p>
        <p>Precio: ${producto.precio} </p>
        <button type="button" className="btn btn-secondary btn-sm">Agregar</button>
      </div>
  )
}

export default Item;