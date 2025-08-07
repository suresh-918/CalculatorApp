import { useState } from "react";
import "./style.css";
import { evaluate } from 'mathjs';


function Calculator(){

    const[input,setInput] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    const handleEqual = () =>{
        try{
            setResult(evaluate(input));
        }
        catch (error){
            setResult('Error');
        }
        
    }

    return (
        <div className="container">
            <h1 className="heading">Simple Calculator</h1>
            <input className="input" type="text" value={input} onChange={handleChange} />
            <button className="btn" onClick={handleEqual}>Result</button>
            <h1>Result is : {result}</h1>
            <div className="buttons">
                <button onClick={()=> setInput(input + '7')}>7</button>
                <button onClick={()=> setInput(input + '8')}>8</button>
                <button onClick={()=> setInput(input + '9')}>9</button>
                <button onClick={()=> setInput(input + '/')}>/</button> 

                <button onClick={()=> setInput(input + '4')}>4</button>
                <button onClick={()=> setInput(input + '5')}>5</button>
                <button onClick={()=> setInput(input + '6')}>6</button>
                <button onClick={()=> setInput(input + '*')}>*</button>

                <button onClick={()=> setInput(input + '1')}>1</button>
                <button onClick={()=> setInput(input + '2')}>2</button>
                <button onClick={()=> setInput(input + '3')}>3</button>
                <button onClick={()=> setInput(input + '-')}>-</button>

                <button onClick={()=> setInput(input + '0')}>0</button>
                <button onClick={()=> setInput(input + '.')}>.</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={()=> setInput(input + '+')}>+</button>

                <button onClick={() =>setInput('')}>CLEAR</button>
            </div>
        </div>
    )
}

export default Calculator;