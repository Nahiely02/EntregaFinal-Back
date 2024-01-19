import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"

import "./Cart.scss";

const Cart = () => {
  const { cart, borrarProducto, borrarCarrito, totalPrecio } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="cart-vacio">
        <h2>Ups... El carrito esta vacio. 😢</h2>
        <Link className="btn-link" to="/">Ir al inicio</Link>
      </div>
    )
  }

  return (
    <div className="container-cart">
      <ul className="ul-cart">
        {cart.map((producto) => (
          <li className="li-cart" key={producto.id}>
            <img className="img-cart" src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <button className="btn-link" onClick={() => borrarProducto(producto.id)}>Eliminar producto</button>
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${totalPrecio()}</h3>
      <button className="btn-link" onClick={borrarCarrito}>
          Vaciar carrito
      </button>
        <Link className="btn-link" to="/checkout">Continuar con mi compra</Link>

    </div>
  )
}
export default Cart