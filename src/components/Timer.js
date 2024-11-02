import React, { useEffect, useState } from 'react';

function Timer({ duration, onTimeOut }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeOut]);

  return (
    <div className="timer">
      Time left: {timeLeft}s
    </div>
  );
}

export default Timer;
