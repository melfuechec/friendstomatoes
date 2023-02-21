import logo from './/clipart-md.png';
import './App.css';
import getMovies from './utils/getMovies';
import { useState, useEffect } from 'react';
import MovieDescription from './MovieDescription';

function App() {
  useEffect(()=>{
    getMovies(setMovies);
  }, [])

  const [movies, setMovies] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To Friends' Tomatoes
        </p>
        <div style={style}>
        {movies && movies.results.map((data) => <MovieDescription filePath = {data.poster_path} key={data.title} movie={data}/>)
      }</div>
      </header>
    </div>
  );
}
const style= {
  flexDirection: 'row'
}
export default App;
