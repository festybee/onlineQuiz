import React from "react";
import "../assets/result.css";
import Review from "./Review.jsx";
import { useLocation, Link } from "react-router-dom";


function Result() {
    const location = useLocation();
    const { questions, selectedOptions, currentIndex } = location.state || {}

    // Loop through the questions array and accumulate the total correct answers.
    // const score = questions.reduce((total, question, index) => {
    //
    //     return selectedOptions[index] === question.answer ? total + 1 : total;
    // }, 0);
    let score = 0;
    questions.forEach((question, index) => {
        if (selectedOptions[index] === question.answer) {
            score++
        }
    })

    return (
        <div className="result">
            <h2>Quiz Results</h2>
            <p>Here is how you performed on the quiz</p>
            <div className="score">{score}
                <p className="text">Correct Answers</p>
            </div>
            {/*<p>Your Score: {score} / {questions.length}</p>*/}
            <div className="score">{Math.floor(score / questions.length * 100)}%
                <p className="text">Percentage</p>
            </div>

            <div className="score">{score}/{questions.length}
                <p className="text">Final Score</p>
            </div>
            {/*<a href={'review'}>Review Assessment</a>*/}
            <Link
                to="/review"
                state={{ selectedOptions, questions, currentIndex }}
                className={"btn"}>
                Review Assessment
            </Link>
            <Link
                to="/welcome"
                className={"btn_reset"}>
                Reset
            </Link>
        </div>
    )
}

export default Result;