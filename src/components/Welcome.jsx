import React from "react";
import { Link } from "react-router-dom";
import '../assets/welcome.css'

export default function Welcome() {
    return (

        <div className={"welcome"}>
            <h1>Welcome to The Quiz Platform</h1>
            <h4>Start your learning adventure here</h4>

            <div className={"instruction"}><h2>Quiz Instructions</h2>
            <p>Please read these instructions carefully before starting the quiz</p>
            <hr/></div>

            <div className={"wrap"}>
            <div className={"cover"}>
                <p>How to take the quiz</p>
                <ol className={"how-to"}>
                    <li>Read each question carefully before selecting your answer.</li>
                    <li>Use the navigation buttons at the bottom to move between questions.</li>
                    <li>You may review and change your answers at any time before submission.</li>
                    <li>Each correct answer is worth one mark.</li>
                </ol>
            </div>
            <div className={"cover"}>
                <p>Navigation and Features</p>
                <ol className={"how-to"}>
                    <li>Question links show progress</li>
                    <li>Answered questions highlighted</li>
                </ol>
            </div>
            </div>

            <Link to="/quiz" className={"btn"}>
                Start Quiz &rarr;
            </Link>
        </div>
    )
};