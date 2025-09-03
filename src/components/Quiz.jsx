import { useEffect, useState } from "react";
import allQuestions from "../data/questions.json";
import getRandomQuestions from "../utils/quizUtils";
import "../assets/quiz.css";

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Select 20 random questions.
        setQuestions(getRandomQuestions(allQuestions, 20));
    }, []);

    // Go to next question.
    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Go to previous question.
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    if (questions.length === 0) {
        return <p>Loading questions...</p>;
    }

    const currentQuestion = questions[currentIndex];

    return (
        <div className="quiz">
            <h1></h1>
            <div className="question-navigation">
                <h5>Question Navigation</h5>
                <p>Current: {currentIndex + 1} of {questions.length}</p>

            </div>
            <p>
                {/*Question {currentIndex + 1} of {questions.length}*/}
            </p>

            <div className="question-block">
                <h3>
                    {currentIndex + 1}. {currentQuestion.question}
                </h3>
                <ul className="question-list">
                    {currentQuestion.options.map((opt, idx) => (
                        <li key={idx}>{opt}</li>
                    ))}
                </ul>
            </div>

            <div className={"quiz-controls"} >
                {currentIndex > 0 && (<button onClick={handlePrevious} id="prev" >
                    &lt; Previous
                </button>)}

                <button onClick={handleNext} disabled={currentIndex === questions.length - 1} id="next">
                    Next &gt;
                </button>
            </div>

        </div>
    )
}

export default Quiz;