var startButton = document.getElementById("start-button")
var quizContainerEL = document.getElementById("quiz-container")
var questionEL = document.getElementById("question")
var answerEL = document.getElementById("answer-buttons")

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    quizContainerEL.classList.remove("hide")
    nextQuestion()
    
}

function nextQuestion () {
    showQuestion()

}

function showQuestion(question){
    questionEL.innerText = question.question

}

function selectAnswer() {

}

var questions = [
    {
        question: Placing two of these symbols in front of a line of code will comment the code out?,
        answer:[
            { text: /, correct: true },
            { text: (, correct: false },
            { text: -, correct: false },
            { text: &, correct: false }

        ]

    }
]
