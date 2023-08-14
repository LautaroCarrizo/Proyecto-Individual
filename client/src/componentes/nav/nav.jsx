import "./nav.css"
import { logout } from "../../redux/actions"
import {NavLink} from "react-router-dom"
import { useDispatch } from "react-redux"
export default function Nav () {
const dispatch = useDispatch()
 const handlerLogOut = () =>{
    dispatch(logout())
 }

    return (
        <nav className="containerNav">
        <h1 className="tituloNav">Cheff Linguini</h1>
        <div className="containerBotonesNav">
        <button className= "btn1">
            <NavLink style={{ textDecoration: "none" }} to="/home"> Home </NavLink>
        </button>
        <button className= "btn1">
            <NavLink style={{ textDecoration: "none" }} to="/form"> Cook </NavLink>
        </button>
        <button onClick={handlerLogOut} className= "btn1">
            <NavLink style={{ textDecoration: "none" }} to="/"> LogOut </NavLink>
        </button>
        </div>
    </nav>
    )
}
