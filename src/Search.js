import React, { useState } from "react";
import { key } from "../src/secrets";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const query = searchInput;

  const api = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&quert=${query}&page=1&include_adult=true`;

  const searchMovies = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <label>
        <input
          type="text"
          name="mySearch"
          placeholder="movie, tv, actor, etc..."
        />
        <button onChange={handleChange} onClick={searchMovies}>
          Search
        </button>
      </label>
    </div>
  );
}
