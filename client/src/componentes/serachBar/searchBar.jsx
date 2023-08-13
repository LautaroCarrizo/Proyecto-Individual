import React from "react";
import "./searchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchByName(name));
    setName("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Busca una receta"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={name}
      />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
