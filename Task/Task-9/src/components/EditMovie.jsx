import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditMovie = ({ movies, updateMovie }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({ id: null, name: '', director: '', image: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieToEdit = movies.find((m) => m.id === parseInt(id));
    if (movieToEdit) {
      setMovie(movieToEdit);
      setLoading(false);
    } else {
      setError('Movie not found');
      setLoading(false);
    }
  }, [id, movies]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setMovie({ ...movie, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (movie.name.trim() === '' || movie.director.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    updateMovie(movie);
    navigate('/');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Movie Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Movie Name"
            value={movie.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="director">Director</label>
          <input
            type="text"
            id="director"
            name="director"
            placeholder="Director"
            value={movie.director}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {movie.image && (
          <div>
            <label>Preview</label>
            <img src={movie.image} alt="Movie Preview" style={{ maxWidth: '200px' }} />
          </div>
        )}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditMovie;
  