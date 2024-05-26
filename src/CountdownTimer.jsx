import React, { useState, useEffect } from 'react';
import "./App.css";
import { differenceInSeconds } from 'date-fns';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = differenceInSeconds(new Date(targetDate), new Date());
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (60 * 60 * 24)),
        hours: Math.floor((difference % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((difference % (60 * 60)) / 60),
        seconds: Math.floor(difference % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  }

  return (
    <div className="countdown-timer">
      <div className="time-left">
        <div className='day'>
          <span>{timeLeft.days}</span> Days
        </div>
        <div className='hour'>
          <span>{timeLeft.hours}</span> Hours
        </div>
        <div className='min'>
          <span>{timeLeft.minutes}</span> Minutes
        </div>
        <div className='sec'>
          <span>{timeLeft.seconds}</span> Seconds
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
