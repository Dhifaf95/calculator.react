import React, { useState } from "react";
import './calculator.css'; 

const Calculator = () => {
    const [inputValue, setInputValue] = useState(""); 
    const [result, setResult] = useState(0);
    const [error, setError] = useState(""); 

    // Functions
    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
        setError(""); 
    }

    const plus = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult + Number(inputValue));
    }
    
    const subtract = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult - Number(inputValue));
    }
    
    const multiply = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult * Number(inputValue));
    }

    const divide = (e) => {
        e.preventDefault();
        if (Number(inputValue) === 0) {
            setError("Cannot divide by zero");
            return;
        }
        setResult((prevResult) => prevResult / Number(inputValue));
    }

    const resetInput = (e) => {
        e.preventDefault();
        setInputValue("");
    }

    const resetResult = (e) => {
        e.preventDefault();
        setResult(0);
    }

    return (
        <div>
            <h2>Build a Calculator using React</h2>
            <form>
                <p>Result: {result}</p>
                {error && <p style={{ color: 'red' }}>{error}</p>} 
                <input 
                    type="number" 
                    placeholder="Type a Number"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div>
                    <button onClick={plus}>Add</button>
                    <button onClick={subtract}>Subtract</button>
                    <button onClick={multiply}>Multiply</button>
                    <button onClick={divide}>Divide</button>
                    <button onClick={resetInput} className="btn">Reset Input</button>
                    <button onClick={resetResult} className="btn">Reset Result</button>
                </div>
            </form>
        </div>
    );
}

export default Calculator;