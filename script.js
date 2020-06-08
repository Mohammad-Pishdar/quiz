const startButton = document.querySelector("#startQuizButton");
const startQuizContainer = document.querySelector("#startQuizContainer")
const questionsContainer = document.querySelector("#question-container");

startButton.addEventListener("click", function () {
    startQuizContainer.classList.replace("show", "hide");
    questionsContainer.classList.replace("hide", "show");
})

const questions = [{
        question: "Commonly used data types DO NOT include:",
        answers: [{
            text: "1. strings",
            correct: false
        }, {
            text: "2. booleans",
            correct: false
        }, {
            text: "3. alerts",
            correct: true
        }, {
            text: "4. numbers",
            correct: false
        }]
    },
    {
        question: "Arrays in JavaScript can be used to store ____________.",
        answers: [{
            text: "1. numbers and strings",
            correct: false
        }, {
            text: "2. other arrays",
            correct: false
        }, {
            text: "3. booleans",
            correct: false
        }, {
            text: "4. all of the above",
            correct: true
        }]
    },
    {
        question: "The condition in an if/else statement is enclosed within _________.",
        answers: [{
            text: "1. qoutes",
            correct: false
        }, {
            text: "2. curly brackets",
            correct: false
        }, {
            text: "3. parentheses",
            correct: true
        }, {
            text: "4. square brakets",
            correct: false
        }]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [{
            text: "1. script",
            correct: true
        }, {
            text: "2. javascript",
            correct: false
        }, {
            text: "3. js",
            correct: false
        }, {
            text: "4. scripting",
            correct: false
        }]
    }
]