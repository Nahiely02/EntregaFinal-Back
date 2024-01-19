import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"
import { Form } from "./Form"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'
import db from "../../db/db"


const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailRepetido: ""
    });
    const [idOrden, setIdOrden] = useState(null)
    const { cart, totalPrecio, borrarCarrito } = useContext(CartContext)

    const guardarDatosInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
    }

    const setOrden = (event) => {
        event.preventDefault();
        if (datosForm.email === datosForm.emailRepetido) {
            const orden = {
                comprador: { ...datosForm },
                productos: [...cart],
                fecha: new Date(),
                total: totalPrecio(),
            };
            subirOrden(orden)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Enviado",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error al enviar",
                text: "Los emails deben ser iguales",
            });
        }
    };

    const subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((respuesta) => {
                setIdOrden(respuesta.id)
                //limpiar carrito finalizada la compra
                borrarCarrito()
            });
    }

    return (
        <div>
            {idOrden ? (
                <div className="orden">
                    <h2>Orden generada correctamente</h2>
                    <p>N° de orden: {idOrden}</p>
                    <Link className="boton-orden" to="/">Ver mas productos</Link>
                </div>
            ) : (
                <Form datosForm={datosForm} guardarDatosInput={guardarDatosInput} setOrden={setOrden} />
            )}
        </div>
    )
}
export default Checkout