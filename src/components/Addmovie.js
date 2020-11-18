import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const Addmovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
    setName((e.target.value = ""));
    setPrice((e.target.value = ""));
  };

  return (
    <div>
      <form className="add-movie-form" onSubmit={addMovie}>
        <h3>Add A Movie</h3>
        <input
          className="add-name"
          required="true"
          type="text"
          name="name"
          placeholder="Movie Name"
          value={name}
          onChange={updateName}
        />
        <input
          className="add-price"
          required="true"
          type="text"
          name="price"
          placeholder="Movie Price"
          value={price}
          onChange={updatePrice}
        />
        <button className="add-movie-button" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default Addmovie;
