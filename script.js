const quizData = [
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        correct: 1,
        category: "Geography"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2,
        category: "Art"
    },
    // ... rest of the questions
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let isAnswered = false;
let timer = 15;
let streak = 0;
let maxStreak = 0;
let timerInterval = null;

function startTimer() {
    timer = 15;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timer--;
        updateTimerDisplay();
        if (timer === 0) handleAnswer(null);
    }, 1000);
}

// ... rest of all functions from original script

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

// Initialize
renderQuestion();
