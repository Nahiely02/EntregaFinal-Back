import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalCantidad} = useContext (CartContext)

    return (
    <Link to="/Cart" className ="cartwidget">
        <IoBagHandle size={30} color="black" />
        <p>{totalCantidad()}</p>    
    </Link>
    )
}

export default CartWidget