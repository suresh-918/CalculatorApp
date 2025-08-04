import { useEffect, useRef } from "react";
import useCounter from "./useCounter";
import './style.css'


function Counter(){
    const {count,increment,decrement,reset} = useCounter();

    const renderCount = useRef(1);
    

    useEffect(()=>{
        renderCount.current += 1;
        console.log(`renderCount : ${renderCount.current}`);
        
        
    })

    return (
        <div className="main">
            
            <div className="btn">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
            <p>Counter : <span >{count}</span></p>
            <p>Render Count : {renderCount.current}</p>
        </div>
    )
}

export default Counter;