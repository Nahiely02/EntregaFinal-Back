import { createContext, useState } from "react";

//Creamos un contextode rect llamado CartContext
const CartContext = createContext();

//creamos un componente "cartProvider" que sera el proveedor del contexto
const CartProvider = ({children}) =>{
    const [cart, setCarrito] = useState([])

    const setProducto = (producto) =>{
        const condicion = inCart(producto.id)
        
        if(condicion){
            //logica para sumar la cantidad si el producto ya estaba agregado
            const productosModificados = cart.map((productoCart) => {
                if(productoCart.id === producto.id){
                    return {...productoCart, cantidad: productoCart.cantidad + producto.cantidad}
                }else{
                    return productoCart
                }
            })
            setCarrito(productosModificados)
        }else{
            setCarrito([...cart,producto])   //guardamos lo que ya tenia el carrito, y añadimos el nuevo producto
        }
    }

    const inCart = (idProducto) =>{
        return cart.some((producto) => producto.id === idProducto )
    }

    const totalCantidad = ()=>{
        return cart.reduce((total, producto) => total + producto.cantidad , 0);
    }

    const borrarPrducto = (idProducto) =>{
        const productosFiltrados = cart.filter((producto) => producto.id !== idProducto)
        setCarrito(productosFiltrados)
    }

    /*añadir funcion para eliminar carrito*/

    /* console.log(cart) */
    
    return( 
        <CartContext.Provider value={{cart, setProducto, totalCantidad, borrarPrducto}}>
            {children} {/* los componentes que envuelve CartProvider caen en el chilcren */}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext};