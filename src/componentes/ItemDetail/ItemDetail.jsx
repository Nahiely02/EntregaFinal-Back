const ItemDetail = ({producto}) => {

  return (
    <section>
        <img src={producto.imagen} alt={producto.nombre}></img>
        <p>{producto.nombre}</p>
        <p>{producto.precio}</p>
    
    </section>
  )
}
export default ItemDetail