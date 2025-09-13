import React from "react";
import "../assets/result.css";
import Review from "./Review.jsx";
import { useLocation, Link } from "react-router-dom";


function Result() {
    const location = useLocation();
    const { questions, selectedOptions, currentIndex } = location.state || {}


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

            <div className="score">{Math.floor(score / questions.length * 100)}%
                <p className="text">Percentage</p>
            </div>

            <div className="score">{score}/{questions.length}
                <p className="text">Final Score</p>
            </div>

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