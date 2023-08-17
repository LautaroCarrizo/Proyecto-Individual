import "./formLogin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/actions";
import validations from "./validations";
import Messages from "../messages/messages";
import ErrorHandler from "../errors/error";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const access = useSelector((state) => state.access);

  useEffect(()=> {
    if (access) {
      navigate("/home");
    }
  }, [access, navigate, dispatch])
  
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validations({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const submitHandlerAll = (event, str) => {
    if (str === "register") {
        event.preventDefault();
        dispatch(register(userData));
    } else {
      event.preventDefault();
      dispatch(login(userData));
    }
  };
  

  return (
    <form onSubmit={submitHandlerAll}>
      <div>
        <div className="inputBoxLogin">
          <label htmlFor="email">email: </label>
          <input
            placeholder="Ingrese su email"
            type="text"
            key="name"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
          {errors.email ? <div className="containerSpan"> <span>{errors.email}</span> </div> : null}
        <div  className="inputBoxLogin">
          <label htmlFor="password">password: </label>
          <input
            placeholder="password.."
            type="password"
            key="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
          {errors.password ? <div className="containerSpan"> <span>{errors.password}</span> </div> : null}
      </div>
      <div><Messages/><ErrorHandler/> </div>
      <div className="containerButton">
        <h3>¿Tienes una cuenta? ¡Regístrate!</h3>
        <button
          type="submit"
          onClick={(event) => submitHandlerAll(event, "register")}
        >
          Register
        </button>
        <button
          type="submit"
          onClick={(event) => submitHandlerAll(event, "login")}
        >
          Login
        </button>
      </div>
    </form>
  );
}
