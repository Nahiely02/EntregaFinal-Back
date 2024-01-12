import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, setCart }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="controls">
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={() => setCart(contador)} className="add"> Agregar al carrito </button>
        </div>
    );
};

export default ItemCount;