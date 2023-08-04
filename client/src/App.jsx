
//import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Landing from "./componentes/landing/landing";
import Nav from "./componentes/nav/nav";
 import Home from "./componentes/home/home";
import Footer from "./componentes/footer/footer";

function App() {
  let ubi = useLocation();
  return (
    <div className="App">
      {ubi.pathname !== "/" && <Nav showNav={ubi.pathname !== "/"} />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
         <Route path="/home" element={<Home />}></Route> 
        {/* <Route path="/Abaout" element={<Abaout />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route> */}
      </Routes>
      {ubi.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App
