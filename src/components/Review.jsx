import React, {useState} from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../assets/review.css";

export default function Review() {
    const location = useLocation();
    const { questions, selectedOptions } = location.state || {};
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const currentQuestion = questions[currentIndex];

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
    }

    // Go to previous question.
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    // If no questions loaded yet, display Loading questions.
    if (questions.length === 0) {
        return <p>Loading questions...</p>;
    }

    return (
        <div className="review-container">
            <h2>Quiz Review</h2>

            <div className="navigator">
                {questions.map((q, idx) => (
                    <button
                        key={idx}
                        className={`nav-btn ${selectedOptions[idx] ? "answered" : ""} ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                        disabled={!selectedOptions[idx]}>
                        {idx + 1}
                    </button>
                ))}
                <button className="result_page" onClick={() => navigate(-1)}> Result Page</button>
            </div>

            <div className="question-block">
                <h3>
                    {currentIndex + 1}.  {currentQuestion.question}
                </h3>
                <ul className="options-cover">
                    {currentQuestion.options.map((opt, idx) => {
                        const isSelected = selectedOptions[currentIndex] === opt;
                        const isCorrect = selectedOptions[currentIndex] === currentQuestion.answer;

                        return (
                            <li
                                key={idx}
                                className={`question-list 
                                  ${isSelected ? "selected" : ""} 
                                  ${isSelected && isCorrect ? "correct" : ""} 
                                  ${isSelected && !isCorrect ? "wrong" : ""}`}
                            >
                                {opt}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={"answer"}>
                <h3>The correct answer is --- {currentQuestion.answer}</h3>
            </div>
        </div>
    )
}