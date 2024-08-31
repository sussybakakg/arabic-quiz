const questions = [
    { english: "Hello", arabic: "مرحبا" },
    { english: "Thank you", arabic: "شكرا" },
    { english: "Goodbye", arabic: "وداعا" },
    { english: "Please", arabic: "من فضلك" },
    { english: "Yes", arabic: "نعم" },
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = `Translate: ${questions[currentQuestion].english}`;
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim();
    const feedback = document.getElementById('feedback');

    if (answer === questions[currentQuestion].arabic) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrect! The correct answer is "${questions[currentQuestion].arabic}"`;
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % questions.length;
    displayQuestion();
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

// Initialize the first question
displayQuestion();
