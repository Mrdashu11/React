import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, deleteMovie }) => {
  return (
    <div>
      <h2>Movies List</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Director</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.image && <img src={URL.createObjectURL(movie.image)} alt={movie.name} width="100" />}</td>
              <td>{movie.name}</td>
              <td>{movie.director}</td>
              <td>
                <Link to={`/edit/${movie.id}`}>Edit</Link>
                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
