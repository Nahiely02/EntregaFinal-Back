import CardWidget from "./CardWidget"
import "./NavBar.css"

const NavBar = () =>{
    return(
        <div id= "navbar">
            <h1>Tienda de Misiones </h1>
            <ul>
                <li><a href="#">Mates</a></li>
                <li><a href="#">Termos</a></li>
                <li><a href="#">Yerbas</a></li>
                <li><a href="#">Imanes</a></li>
            </ul>

            <CardWidget/>
        </div>
    )
}

export default NavBar