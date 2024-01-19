import { useContext } from "react";
import { IoBagHandle } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cart, totalCantidad} = useContext (CartContext)

    return (
    <Link to="/Cart" className ="cartwidget">
        <IoBagHandle size={30} color="black" />
        {cart.length !== 0 && <p>{totalCantidad()}</p>}
    </Link>
    )
}

export default CartWidget