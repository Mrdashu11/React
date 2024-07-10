import React, { useState, useEffect } from 'react';

function Fetch() {
  const [dogImage, setDogImage] = useState('');

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  const handleNewDogClick = () => {
    fetchRandomDogImage();
  };

  return (
    <div>
   
      <center>
      <h1>Random Dog Image</h1>
        <div className='dog'>
          <img src={dogImage}id='pic' alt="Dog" />
        </div>
        <button onClick={handleNewDogClick} className='button'>New Dog</button>
        </center>
      
     
    </div>
  );
}

export default Fetch;
