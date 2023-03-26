import { key } from "../secrets";
const api = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&&page=1&include_adult=true`;

const searchMulti = (setMulti) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => setMulti(data));
};

export default searchMulti;
