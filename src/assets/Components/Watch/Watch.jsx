import { useState } from "react"


const Watch = () => {
const [seconds,setSeconds] = useState(0);
const[minutes,setMinutes] = useState(0);
const[hours,setHours] = useState(0);
const [isRunning,setIsRunning] = useState(false);
const[intervalId, setIntervalId]= useState(null);

const updateTime = () => {
    setSeconds = (prevSeconds) => {
   if(prevSeconds === 59) {
    setMinutes = ((prevMinutes) => {
        if(prevMinutes === 59) {
            setHours = ((prevHours) => prevHours + 1);
           return 0;
        }
        return prevMinutes + 1;
    });
    return 0;
   }
   return prevSeconds + 1;
    }
}
const reset = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);

}

return(
    <div className="stopwatch">
        <h1>Stop-Watch</h1>
        <div className="time-Display">
            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </div>
        <div className="controls">
        <button>Start</button>
        <button>Stop</button>
        <button onClick={reset}>Reset</button>
        </div>
    </div>
)
}

export default Watch