const questionElement= document.getElementById(`question`)
const answerButton = document.getElementById(`answer-button`)
const nextButton = document.getElementById(`next-btn`)

let currentQuestionIndex = 0;
let score = 0

function startQuiz() {
    resetState()
    currentQuestionIndex = 0
    score = 0
    nextButton.style.display = `none`
    showQuestionAnswer()
}

function showQuestionAnswer() {
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`
    currentQuestion.answers.forEach(answer =>{
        let button = document.createElement(`button`)
        button.classList.add(`btn`)
        button.innerHTML = answer.text
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener(`click`,selectedAnswer)
    })

}

function resetState() {
    nextButton.style.display = `none`
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectedAnswer(e) {
    let selelctedButton = e.target;
    let isCorrect = selelctedButton.dataset.correct ===`true`

    if (isCorrect) {
        selelctedButton.classList.add(`correct`)
        score++
    } else {
        selelctedButton.classList.add(`incorrect`)
    }
    Array.from(answerButton.children).forEach(button =>{
        if (button.dataset.correct ===`true`) {
            button.classList.add(`correct`)
        }
        button.disabled = true
    })
    nextButton.style.display =`block`
}

function showScore() {
   
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`
    nextButton.innerHTML = `Play Again`
    nextButton.style.display = `block`

}


nextButton.addEventListener(`click`,()=>{
    if (currentQuestionIndex < questions.length) {
        nexthuttonHandler()
    }else{
        startQuiz()
    }
`   `
})


function nexthuttonHandler() {
     resetState()
    currentQuestionIndex++
    if (currentQuestionIndex<questions.length) {
        showQuestionAnswer()
    }else{
        showScore()
        
    }

}




startQuiz()