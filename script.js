
// Quiz Question Data
// const questions = [
//     {
//         question: "What is the capital of France?",
//         answers: [
//             { text: "Paris", correct: true },
//             { text: "London", correct: false },
//             { text: "Berlin", correct: false },
//             { text: "Madrid", correct: false }
//         ]
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         answers: [
//             { text: "Earth", correct: false },
//             { text: "Mars", correct: true },
//             { text: "Jupiter", correct: false },
//             { text: "Venus", correct: false }
//         ]
//     },
//     {
//         question: "What is 2 + 2?",
//         answers: [
//             { text: "3", correct: false },
//             { text: "4", correct: true },
//             { text: "5", correct: false },
//             { text: "22", correct: false }
//         ]
//     }
// ];

const questionElement = document.getElementById(`question`);
const answerButton = document.getElementById(`answer-button`)
const nextButton = document.getElementById(`next-btn`)

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = `Next`
    showQuestionAnswer()
    
}

function showQuestionAnswer() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement(`button`)
        button.classList.add(`btn`)
        button.innerHTML = answer.text;
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener(`click`,selectedAnswer)
    })

    console.log(answerButton);
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectedAnswer(e){
    let selelctedButton = e.target ; 
    let isCorrect = selelctedButton.dataset.correct ===`true`
    if(isCorrect){
        selelctedButton.classList.add(`correct`)
        score++
    }else{
        selelctedButton.classList.add(`incorrect`)
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct===`true`){
            button.classList.add(`correct`)
        }
        button.disabled = true
    })
    nextButton.style.display =`block`
}

function showScore() {
    resetState()
    questionElement.innerHTML = `Your Scoreed ${score} out of ${questions.length}!`
    nextButton.innerHTML = `Play again`
    nextButton.style.display = `block`
    
}
function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestionAnswer()
    } else {
        showScore()
    }
}

nextButton.addEventListener(`click`,()=>{
    if (currentQuestionIndex<questions.length) {
        handleNextButton()
    }else{
        startQuiz()
    }
})





startQuiz()