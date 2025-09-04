import { useEffect, useState } from "react";
import allQuestions from "../data/questions.json";
import getRandomQuestions from "../utils/quizUtils";
import "../assets/quiz.css";
import Result from "./Result";

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    useEffect(() => {
        // Select 20 random questions.
        setQuestions(getRandomQuestions(allQuestions, 10));
    }, []);

    // Go to next question.
    const handleNext = () => {
        if (currentIndex === questions.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    // Go to previous question.
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleSelected = (opt) => {
        const updated = [...selectedOptions];
        updated[currentIndex] = opt;
        setSelectedOptions(updated);
    }

    if (questions.length === 0) {
        return <p>Loading questions...</p>;
    }

    const currentQuestion = questions[currentIndex];

    if (isQuizFinished) {
        return <Result selectedOptions={selectedOptions} questions={questions} />;
    }

        return (
            <div className="quiz">
                <h2>Quiz App</h2>
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
                    <ul>
                        {currentQuestion.options.map((opt, idx) => (
                            <li className={`question-list ${selectedOptions[currentIndex] === opt ? "selected" : ""}`} key={idx}
                                onClick={() => handleSelected(opt)}>{opt}</li>
                        ))}
                    </ul>
                </div>

                <div className={"quiz-controls"}>
                    {currentIndex > 0 && (<button onClick={handlePrevious} id="prev">
                        Previous
                    </button>)}

                    <button onClick={handleNext} id="next">
                        {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
                    </button>
                </div>
            </div>
        )
    }


export default Quiz;