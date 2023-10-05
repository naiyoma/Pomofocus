import React, { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

function PomodoroTimer() {
    const [ selectedDuration, setSelectedDuration ] = useState(30*60);
    const [ timerStarted, setTimerStarted] = useState(false);
    const handleDurationChange = ( duration ) => {
        setSelectedDuration(duration);
    }
    useEffect (() => {
        if(timerStarted) {
            const expiryTimestamp = new Date();
            expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + selectedDuration);
            restart(expiryTimestamp);
        }    
    }, [selectedDuration, timerStarted]);
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: new Date(), onExpire: () => console.warn("On expire called")});

    const handleStartTimer = () => {
        setTimerStarted(true);
        start();
    }
      
    return (
      
        <div className="border border-current rounded-md w-full md:w-3/4 lg:w-2/4 xl:w-1/3 flex justify-center border-rose-900 p-4 mx-auto shadow-lg shadow-blue-500/50 mt-6">
          <div style={{textAlign: 'center'}}>
            <button className="rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900" onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 300);
              restart(time)
              }}>Break</button>
            <div style={{fontSize: '100px'}} className="text-rose-900">
              <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            {/* rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900 */}
              {!timerStarted && <button className="rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900 font-bold py-2 px-4 mr-2" onClick={handleStartTimer}>Start</button>}
              {timerStarted && <button className="rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900 py-2 px-4 mr-2" onClick={pause}>Pause</button>}
              {timerStarted && <button className="rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900 py-2 px-4 mr-2" onClick={resume}>Resume</button>}
            <button class="rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900 py-2 px-4" onClick={() => {
              // Restarts to 5 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + selectedDuration);
              restart(time)
              }}>
              Restart
            </button>
            <h2>Selected Timer Duration:</h2>
            <button class="rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900 py-2 px-4 mr-2"onClick={() => handleDurationChange(30*60)}>30 minutes</button>
            <button class="rounded-lg border-solid border-2 border-rose-900 w-24 bg-rose-100 text-rose-900 py-2 px-4  mr-2" onClick={() => handleDurationChange(45*60)}>45 minutes</button>
            <button class="rounded-lg border-solid border-2 border-rose-900 w-20 bg-rose-100 text-rose-900 py-2 px-4 mr-2" onClick={() => handleDurationChange(60*60)}>1 Hour</button>
          </div>
        </div>
    )
}

export default PomodoroTimer;