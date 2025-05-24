import React, { useState, useEffect } from 'react';

function CountdownTimer({ launchDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(launchDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
      if (Object.keys(newTime).length === 0) {
        setLaunched(true);
        clearInterval(timer);
        // Optional: play sound here
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  if (launched) {
    return <h1>Switch 2 is out! 🎉</h1>;
  }

  return (
    <div>
      <h2>Launch In:</h2>
      <p>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
}

export default CountdownTimer;
