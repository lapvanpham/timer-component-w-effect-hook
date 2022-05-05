import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    let tempTimer = timer;

    const interval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
      tempTimer -= 1;
      if (tempTimer === 0) {
        clearInterval(interval);
        alert('Time is up!');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Timer'>
      <h2>Count down from {timer}</h2>
    </div>
  );
}

export default Timer;
