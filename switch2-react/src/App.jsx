import React from 'react';
import CountdownTimer from './countdownTimer';
import './app.css';

function App() {
  const launchDate = '2025-06-01T00:00:00'; // you can change this

  return (
    <div className="switch-console">
       <div className="joycon left"></div>
        <div className="circle-button top"></div>
        <div className="circle-button bottom"></div>
       
       <div className="screen">
         <h1>Switch 2 Launch Timer</h1>
         <CountdownTimer launchDate={launchDate} />
       </div>

       <div className="joycon right"></div>
        <div className="circle-button top"></div>
        <div className="circle_button bottom"></div>
    </div>

  );
}

export default App;
