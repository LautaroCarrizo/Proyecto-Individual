import "./footer.css"

export default function Footer () {

    return (
        <div className="containerFooter">
          <img className="imgHenry" src="../../../img/henryFondo.jpg" alt="" />
        <div className="containerTituloFooter">
          <h1>  Proyecto Individual Henry </h1>
          <div className="textoFooter"><p>Elaborado por el alumno Carrizo Lautaro cohorte 40A</p></div>
        </div>
        <div className="containerSocialMedia">
        <a className="iconoFooter"
             href="https://github.com/LautaroCarrizo/Proyecto-Individual"
             target="_blank"
             rel="noopener noreferrer"
             >
             <img src={"../../../img/github.svg"} alt="GitHub" />
           </a>
           <a className="iconoFooter"
             href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
             target="_blank"
             rel="noopener noreferrer"
             >
             <img  src={"../../../img/linkedin.svg"} alt="LinkedIn" />
           </a>   
        </div>
       </div>
    )
}
