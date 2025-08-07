import { useEffect, useRef, useState } from "react";
import "./style.css"

function StopWatch(){

    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    const  timeRef = useRef(null);

    useEffect (() =>{

        return () => clearInterval(timeRef.current);
    }, []);

    const StartTimer = () =>{
        if(isRunning){
            return;
        }
        setIsRunning(true);
        timeRef.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 10);
    }

    const StopTimer = () =>{
        clearInterval(timeRef.current);
        setIsRunning(false);
    }
    const ResetTimer = () =>{
        clearInterval(timeRef.current);
        setTime(0);
        setIsRunning(false);
    }

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60000)
        const seconds = Math.floor((timeInSeconds % 60000) / 1000);
        const miliseconds = Math.floor((timeInSeconds % 1000) / 10);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(miliseconds).padStart(2, '0')}`;
    };


    return (
        <div className="main">
            <h1> StopWatch - {formatTime(time)}</h1>
            <button className="btn" onClick={StartTimer}> start </button>
            <button onClick={StopTimer}> stop </button>
            <button onClick={ResetTimer}> reset </button>
        </div>
    )
}

export default StopWatch;