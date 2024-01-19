import "./Checkout.scss"

export const Form = ({ datosForm, guardarDatosInput, setOrden }) => {
  return (
    <form className="column g-3 checkout" onSubmit={setOrden} >
      <div className="col-md-3 mx-auto">
        <label className="form-label" htmlFor="nombre">Apellido y Nombre</label>
        <input className="form-control" type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} required />
      </div>

      <div className="col-md-3 mx-auto">
        <label className="form-label"  htmlFor="telefono">Telefono</label>
        <input className="form-control" type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} required />
      </div>

      <div className="col-md-3 mx-auto">
        <label className="form-label"  htmlFor="email">Email</label>
        <input className="form-control" type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} required />
      </div>

      <div className="col-md-3 mx-auto">
        <label className="form-label"  htmlFor="emailRepetido">Repetir Email</label>
        <input className="form-control" type="email" id="emailRepetido" name="emailRepetido" value={datosForm.emailRepetido} onChange={guardarDatosInput} required />
      </div>

      <button type="submit">Enviar orden de compra</button>
    </form>
  )
}

export default Form