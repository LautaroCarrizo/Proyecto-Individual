import React from "react";
import "./landing.css";
import Login from "../login/formLogin";

export default function Landing() {

   return (
     <div className="containerLanding">
       <div className="containerTitle">
         <h1>Proyecto Individual Food</h1>
        <div className="containerLogin">
          <Login/>
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