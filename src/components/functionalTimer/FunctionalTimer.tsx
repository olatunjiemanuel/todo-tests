import React, { useState, useEffect } from "react";

interface FunctionalTimerProps {
  timerStartValue: number;
}

const FunctionalTimer = ({ timerStartValue }: FunctionalTimerProps) => {
  const [countdownValue, setCountdownValue] = useState(timerStartValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownValue((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <p>Countdown from: {countdownValue}</p>;
};

export default FunctionalTimer;
