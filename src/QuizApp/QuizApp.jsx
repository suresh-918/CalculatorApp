import { useState } from "react";
import questions from "./questions";
import './style.css';


function QuizApp(){

    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult,setShowResult] = useState(false);
    


    const handleQuestionIndex = () =>{
        if(selectedOption === questions[currentQuestionIndex].correctAnswer){
            setScore(prev => prev + 10);
        }
        if(currentQuestionIndex + 1 === questions.length){
            setShowResult(true);
        }
        else{
            setCurrentQuestionIndex(prev => prev + 1);
        }
        setSelectedOption(null);
        
        
    }

    const handlesaveOption = (option) =>{
        setSelectedOption(option);
    }

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
    };

    if (showResult) {
        return (
            <div className="restart">
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score} / {questions.length * 10}</p>
                <button onClick={restartQuiz}>Restart</button>
            </div>
        );
    }

    
    

    return (
        <div className="container">
            <p className="question">Question-{currentQuestionIndex+ 1} :   {questions[currentQuestionIndex].question}</p>
            
            {
                questions[currentQuestionIndex].options.map((option, index) => 
                    <div key={option}>
                        <button onClick={() =>handlesaveOption(option)}  style={{backgroundColor: selectedOption === option ? 'lightgreen' :'white'}} ><p>{option}</p></button>
                    </div>
                )
            }
            <button className="next-btn" onClick={handleQuestionIndex} disabled={selectedOption === null}>Next</button>
        </div>
    )
}

export default QuizApp;