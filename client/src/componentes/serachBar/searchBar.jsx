import React from "react";
import "./searchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

export default function SearchBar({pageFiltersOrders}) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchByName(name));
    setName("");
    pageFiltersOrders()
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      pageFiltersOrders()
    }
  };

  return (
    <div className="containerSearch">
      <input
      className="inputSearch"
        type="search"
        placeholder="Busca una receta"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={name}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
