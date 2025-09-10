import React from "react";
import { useLocation } from "react-router-dom";

export default function Review() {
    const location = useLocation();
    const { questions, selectedOptions } = location.state || {};

    return (
        <>
            <h1>{questions.length}</h1>
            <p></p>
            <h2></h2>
        </>
    )
}