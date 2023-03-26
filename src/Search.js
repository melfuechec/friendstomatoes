import React from "react";
import { key } from "../src/secrets";

export default function Search() {
  const api = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&&page=1&include_adult=true`;

  const searchMulti = (setMulti) => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setMulti(data));
  };
  return (
    <div>
      <label>
        <input name="mySearch" defaultValue="movie, tv, actor, etc..." />
        <button onClick={searchMulti}>Search</button>
      </label>
    </div>
  );
}
