import React from "react";
import "../assets/result.css";


function Result({ questions, selectedOptions }) {

    const score = questions.reduce((total, question, index) => {

        return selectedOptions[index] === question.answer ? total + 1 : total;
    }, 0);

    return (
        <div className="result">
            <h2>Quiz Results</h2>
            <p>Here is how you performed on the quiz</p>
            <div className="score">{score}
                <p className="text">Correct Answers</p>
            </div>
            {/*<p>Your Score: {score} / {questions.length}</p>*/}
            <div className="score">{score / questions.length * 100}%
                <p className="text">Percentage</p>
            </div>

            <div className="score">{score}/{questions.length}
                <p className="text">Final Score</p>
            </div>
        </div>
    )
}

export default Result;