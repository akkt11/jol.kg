import React from 'react'
import './Timer.scss'

const Timer = () => {

        const [countDown, setCountDown] = React.useState(0);
        const [runTimer, setRunTimer] = React.useState(true);
      
        React.useEffect(() => {
          let timerId;
      
          if (runTimer) {
            setCountDown(360 * 5);
            timerId = setInterval(() => {
              setCountDown((countDown) => countDown - 1);
            }, 1000);
          } else {
            clearInterval(timerId);
          }
      
          return () => clearInterval(timerId);
        }, [runTimer]);
      
        React.useEffect(() => {
          if (countDown < 0 && runTimer) {
            console.log("expired");
            setRunTimer(false);
            setCountDown(0);
          }
        }, [countDown, runTimer]);
      
        const seconds = String(countDown % 60).padStart(2, 0);
        const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
      
        return (
          <div className="timer-container">
            <div className='timer'>
                {minutes}:{seconds}
            </div>

          </div>
        );
      }


export default Timer