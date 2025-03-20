const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"],
        correct: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Gold", "Oxygen", "Silver", "Iron"],
        correct: "Oxygen"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: "Diamond"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correct: "Jupiter"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["China", "Japan", "Thailand", "South Korea"],
        correct: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "What is the capital city of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: "Canberra"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();

    document.getElementById('next-button').addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === quizData[currentQuestionIndex].correct) {
                score++;
            }
            selectedAnswer.checked = false;
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                showQuestion();
            } else {
                showResult();
            }
        } else {
            alert("Please select an answer.");
        }
    });

    document.getElementById('restart-button').addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('quiz').classList.remove('hidden');
        document.getElementById('result').classList.add('hidden');
        showQuestion();
    });
});

function showQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz');

    quizContainer.innerHTML = `
        <div class="question">
            <h2>${questionData.question}</h2>
            ${questionData.answers.map((answer) => `
                <label class="answer">
                    <input type="radio" name="answer" value="${answer}">
                    ${answer}
                </label>
            `).join('')}
        </div>
    `;
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    document.getElementById('score').innerText = `${score} out of ${quizData.length}`;

    const percentage = (score / quizData.length) * 100;
    let feedback = '';

    if (percentage === 100) {
        feedback = "Excellent! You got all the answers right.";
    } else if (percentage >= 80) {
        feedback = "Great job! You scored very high.";
    } else if (percentage >= 50) {
        feedback = "Good effort! You got more than half right.";
    } else {
        feedback = "Better luck next time! Keep practicing.";
    }

    document.getElementById('feedback').innerText = feedback;
}
