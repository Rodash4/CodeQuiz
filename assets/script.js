var startButton = document.getElementById("start-button")
var quizContainerEL = document.getElementById("quiz-container")
var questionEL = document.getElementById("question")
var answerEL = document.getElementById("answer-buttons")

let score = 0;
let questionCouter = 0;
let availableQuestions = [];
let currentQuestion = {};
let acceptingAnswer = true;


startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    quizContainerEL.classList.remove("hide")
    nextQuestion()
    
}

startGame()

function nextQuestion () {
    showQuestion()

}

nextQuestion ()

function showQuestion(question){
    questionEL.innerText = question.question

}

showQuestion ()

function selectAnswer() {

}

let questions = [
    {
        questionEL: "Placing two of these symbols in front of a line of code will comment the code out?",
        answerEL:[
            { text: /, correct: true },
            { text: ?, correct: false },
            { text: -, correct: false },
            { text: &, correct: false }

        ]

    }
]

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 4;

