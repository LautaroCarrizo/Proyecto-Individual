import "./nav.css"

import {NavLink} from "react-router-dom"

export default function Nav () {

    return (
        <nav className="containerNav">
        <h1 className="tituloNav">Proyecto Integrador</h1>
        <div className="containerBotonesNav">
        <button className= "btn1">
            <NavLink style={{ textDecoration: "none" }} to="/home"> Home </NavLink>
        </button>
        <button className= "btn1">
            <NavLink style={{ textDecoration: "none" }} to="/form"> Cook </NavLink>
        </button>
        <button className= "btn1">
            <NavLink style={{ textDecoration: "none" }} to="/Favorites"> Favorites </NavLink>
        </button>
        </div>
    </nav>
    )
}
