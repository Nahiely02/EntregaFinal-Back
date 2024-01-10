import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./NavBar.scss"

const NavBar = () =>{
    return(
        <div className= "navbar">
            <Link to="/" className= "brand"> {/* / nos lleva al home */}
                <img src ="/img/logo misionerita sin fondo.png" alt = "logo misionerita"/>
            </Link>
            <ul>
                <li><Link to="/categorias/mates">Mates</Link></li>
                <li><Link to="/categorias/termos">Termos</Link></li>
                <li><Link to="/categorias/yerbas">Yerbas</Link></li>
                <li><Link to="/categorias/materas">Materas</Link></li>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar