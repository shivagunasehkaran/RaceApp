import {useEffect, useState} from 'react';

const CountdownTimer = (startTime: number) => {
  const now = new Date().getTime();
  const secToMilliSec = startTime * 1000;
  const timeRemaining = now - secToMilliSec;
  const [remainingTime, setRemainingTime] = useState(now - secToMilliSec);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update remaining time every second
      setRemainingTime(now - secToMilliSec);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [now, secToMilliSec, timeRemaining]);

  // Convert remaining time to hours, minutes, and seconds
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return `${hours}h ${minutes}m ${seconds}s`;
};

export default CountdownTimer;
