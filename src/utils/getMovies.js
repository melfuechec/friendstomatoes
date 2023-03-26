import { key } from "../secrets";
const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`;

const getMovies = (setMovies) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => setMovies(data));
};

export default getMovies;
