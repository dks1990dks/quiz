const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const categoryDropdown = document.getElementById('category-dropdown');
const quizDiv = document.querySelector('.quiz');

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

startButton.addEventListener('click', () => {
    const selectedCategory = categoryDropdown.value;
    if (!selectedCategory) {
        alert("Please select a subject.");
        return;
    }
    questions = quizData[selectedCategory]; // quizData comes from quiz_data.js
    document.getElementById('category-select').style.display = 'none';
    quizDiv.style.display = 'block';
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestionAnswer();
}

function showQuestionAnswer() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectedAnswer);
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectedAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `🎉 You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        nextQuestionHandler();
    } else {
        showScore();
    }
});

function nextQuestionHandler() {
    currentQuestionIndex++;
    showQuestionAnswer();
}
