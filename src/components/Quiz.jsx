import { useEffect, useState } from "react";
import allQuestions from "../data/questions.json";  // Import all the questions from the question bank
import getRandomQuestions from "../utils/quizUtils";
import "../assets/quiz.css";
import Result from "./Result";

function Quiz() {
    const [questions, setQuestions] = useState([]);  // useState for the questions
    const [currentIndex, setCurrentIndex] = useState(0); // useState for the question index
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null)); // useState for the selected answers. \
    // Initial value is an array of null values totalling the number of questions generated.
    const [isQuizFinished, setIsQuizFinished] = useState(false); // useState to track when the quiz is at the last question.

    // useEffect hook to load the random questions into the session
    useEffect(() => {
        // Select 20 random questions.
        setQuestions(getRandomQuestions(allQuestions, 20));
    }, []);

    // Go to next question. Check if on last question and display Finish instead of Next
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

    // function to update selected options into an array.
    const handleSelected = (opt) => {
        const updated = [...selectedOptions];
        updated[currentIndex] = opt;
        setSelectedOptions(updated);
    }

    // If no questions loaded yet, display Loading questions.
    if (questions.length === 0) {
        return <p>Loading questions...</p>;
    }

    const currentQuestion = questions[currentIndex]; // Gets the current question.

    // Return Result if Finish Button is clicked else return the Quiz questions.
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
                        {currentIndex + 1}.  {currentQuestion.question}
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