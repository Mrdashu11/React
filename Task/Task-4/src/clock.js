import React, { useState, useEffect } from 'react';
import './App.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours % 12) * 30 + minutes * 0.5;
  const minuteRotation = minutes * 6 + seconds * 0.1;
  const secondRotation = seconds * 6; 

  return (
    <div className="watch-container">
      <div className="watch-face">
        <div className="hour-hand" style={{ transform: `rotate(${hourRotation}deg)` }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${minuteRotation}deg)` }}></div>
        <div className="second-hand" style={{ transform: `rotate(${secondRotation}deg)` }}></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
}

export default Clock;
