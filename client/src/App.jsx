
//import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Landing from "./componentes/landing/landing";
import Nav from "./componentes/nav/nav";
 import Home from "./componentes/home/home";
 import Form from "./componentes/form/formRecipe"
import Footer from "./componentes/footer/footer";
import ErrorHandler from "./componentes/errors/error";
function App() {
  let ubi = useLocation();
  return (
    <div className="App">
        <ErrorHandler/>
      {ubi.pathname !== "/" && <Nav showNav={ubi.pathname !== "/"} />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
         <Route path="/home" element={<Home />}></Route> 
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
      {ubi.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App
