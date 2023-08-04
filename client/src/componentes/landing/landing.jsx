//import React from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom"

export default function Landing() {
   const navigate = useNavigate()

  const handlerNavigate = () => {
    navigate("/home")
  }


   return (
     <div className="containerLanding">
       <div className="containerTitle">
         <h1>Proyecto Individual Food</h1>
         <p className="textHenry">Este Proyecto Individual ha sido creado por Lautaro Carrizo, un alumno de la academia en línea SoyHenry, con el propósito de poner en práctica los conocimientos adquiridos durante el bootcamp.</p>         <div className="containerButton">
           <button onClick={handlerNavigate}>Cook</button>
         </div>
       <div className="containerIcons">
           <a className="icono"
             href="https://github.com/LautaroCarrizo/Proyecto-Individual"
             target="_blank"
             rel="noopener noreferrer"
             >
             <img src={"../../../img/github.svg"} alt="GitHub" />
           </a>
           <a className="icono"
             href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
             target="_blank"
             rel="noopener noreferrer"
             >
             <img  src={"../../../img/linkedin.svg"} alt="LinkedIn" />
           </a>   
         </div>
              </div>
       <div className="containerVideo">
       <div>
         <video
           autoPlay
           loop
           muted
           style={{
            width: "100%",
            height: "99.4vh",
             objectFit: "cover",
           }}
         >
           <source src="../../../img/videoLanging.mp4" type="video/mp4" />
         </video>
       </div>
       </div>
     </div>
   );
 }