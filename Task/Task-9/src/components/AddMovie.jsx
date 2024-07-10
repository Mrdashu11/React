import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState({ name: '', director: '' });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (movie.name && movie.director) {
      const movieData = { ...movie, image };
      addMovie(movieData);
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Movie Name"
          value={movie.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          value={movie.director}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMovie;
