import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, { id: movies.length + 1, ...movie }]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Movie</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} deleteMovie={deleteMovie} />} />
          <Route path="/add" element={<AddMovie addMovie={addMovie} />} />
          <Route path="/edit/:id" element={<EditMovie movies={movies} updateMovie={updateMovie} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
