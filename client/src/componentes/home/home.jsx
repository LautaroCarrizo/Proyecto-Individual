import { useEffect } from "react";
import "./home.css";
import Cards from "../cards/cards";
import { getAllRecipes } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      await dispatch(getAllRecipes());
    }
    getData();
  }, [dispatch]);

  return (
    <div className="containerHome">
      <div className="containerTitulo">
        <h1>Food</h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}
