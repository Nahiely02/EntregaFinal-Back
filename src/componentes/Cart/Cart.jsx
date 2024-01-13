import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Cart.scss";

const Cart = () => {
  const {cart, borrarPrducto} = useContext(CartContext)

    return (
      <div>
        <ul className="ul-cart">
        {
          cart.map((producto) =>(
            <li className="li-cart" key={producto.id}>
              <img className="img-cart" src={producto.imagen} alt={producto.nombre}/>
              <p>{producto.nombre}</p>
              <p>{producto.cantidad}</p>
              <button onClick={() => borrarPrducto(producto.id)}>Eliminar producto</button>
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
  export default Cart