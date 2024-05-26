import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import sandClockGIF from './sand-clock-dribbble.gif'; 
import './App.css';

function App() {
  const [targetDate, setTargetDate] = useState('2024-05-26 T00:00:00'); 

  const handleDateChange = (event) => {
    setTargetDate(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
          <img src={sandClockGIF} alt="Sand Clock" className='gif'/>
      <div className='head'>
      <div><span  id='counter'>Countdown</span><span id='timer'> Timer</span></div>
      </div>

          <CountdownTimer targetDate={targetDate} />
          <p>Target Date and Time: {new Date(targetDate).toLocaleString()}</p>

        <input type="datetime-local" value={targetDate} className='datetime' onChange={handleDateChange}  />
      </header>
    </div>
  );
}

export default App;
