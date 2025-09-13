import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import allQuestions from "../data/questions.json";  // Import all the questions from the question bank
import getRandomQuestions from "../utils/quizUtils";
import "../assets/quiz.css";


function Quiz() {

    const [questions, setQuestions] = useState([]);  // useState for the questions
    const [currentIndex, setCurrentIndex] = useState(0); // useState for the question index

    // Initial value is an array of null values totaling the number of questions generated.
    const [selectedOptions, setSelectedOptions] = useState([...Array(questions.length)]);
    const navigate = useNavigate();


    // useEffect hook to load the number of random questions into the session
    useEffect(() => {

        setQuestions(getRandomQuestions(allQuestions, 20));
    }, []);

    // Go to next question.
    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
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

    const handleFinish = () => {
        navigate("/result", { state: { questions: questions, selectedOptions: selectedOptions, currentIndex: currentIndex } });
    }


    // If no questions loaded yet, display Loading questions.
    if (questions.length === 0) {
        return <p>Loading questions...</p>;
    }

    const currentQuestion = questions[currentIndex]; // Gets the current question.

        return (
            <div className="quiz">
                <h2>Quiz App</h2>
                <div className="question-navigation">
                    <h5>Question Navigation</h5>
                    <p>Current: {currentIndex + 1} of {questions.length}</p>

                    {/*This adds a link to answered questions.*/}
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
                    </div>

                </div>

                <div className="question-block">
                    <h3>
                        {currentIndex + 1}.  {currentQuestion.question}
                    </h3>
                    <ul className="options-cover">
                        {currentQuestion.options.map((opt, idx) => (
                            <li className={`question-list ${selectedOptions[currentIndex] === opt ? "selected" : ""}`} key={idx}
                                onClick={() => handleSelected(opt)}>{opt}</li>
                        ))}
                    </ul>
                </div>

                <div className={"quiz-controls"}>
                    {currentIndex > 0 && (
                        <button onClick={handlePrevious} className="quiz-controls">
                        Previous
                    </button>)}

                    <button onClick={handleNext} className="quiz-controls" disabled={!selectedOptions[currentIndex]}>
                        {currentIndex === questions.length - 1 ? <span onClick={handleFinish}> Finish Quiz </span> : "Next"}
                    </button>
                </div>
            </div>
        )
    }


export default Quiz;