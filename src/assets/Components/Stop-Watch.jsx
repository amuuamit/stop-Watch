// src/Stopwatch.jsx
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start or Stop the stopwatch
  const toggleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalId);
    } else {
      const id = setInterval(updateTime, 1000);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  // Update the time every second
  const updateTime = () => {
    setSeconds((prevSeconds) => {
      if (prevSeconds === 59) {
        setMinutes((prevMinutes) => {
          if (prevMinutes === 59) {
            setHours((prevHours) => prevHours + 1);
            return 0;
          }
          return prevMinutes + 1;
        });
        return 0;
      }
      return prevSeconds + 1;
    });
  };

  // Reset the stopwatch
  const reset = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  // Format time as HH:MM:SS
  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <div className="controls">
        <button onClick={toggleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};


export default Stopwatch;