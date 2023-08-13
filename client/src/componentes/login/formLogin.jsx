import "./formLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/actions";
import validations from "./validations";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const access = useSelector((state) => state.access);

  const handlerNavigate = () => {
    if (access) {
      navigate("/home");
    }
  };

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
      if (Object.keys(errors).length === 0) { 
        event.preventDefault();
        dispatch(register(userData));
      } else {
        throw new Error("Usuario no encontrado");
      }
    } else {
      event.preventDefault();
      dispatch(login(userData));
      handlerNavigate();
    }
  };

  return (
    <form onSubmit={submitHandlerAll}>
      <div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            placeholder="Ingrese su email"
            type="text"
            key="name"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <br />
          {errors.email ? <span>{errors.email}</span> : null}
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            placeholder="password.."
            type="password"
            key="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <br />
          {errors.password ? <span>{errors.password}</span> : null}
        </div>
      </div>
      <div>
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
