// // Function to ge
// function getRandomQuestions(questions, count) {
//     const shuffled = [...questions].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
// }

function getRandomQuestions(questions, count) {

    let q_array = [];
    while (q_array.length < count) {
        let randNumber = Math.floor(Math.random() * questions.length); // 0 to length 1
        if (!q_array.includes(randNumber)) {
            q_array.push(randNumber);
        }
    }

    return q_array.map(i => questions[i]);
}

export default getRandomQuestions;