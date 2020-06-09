const startButton = document.querySelector("#startQuizButton");
const startQuizContainer = document.querySelector("#startQuizContainer")
const questionsContainer = document.querySelector("#question-container");
const question = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons")
const firstAnswer = document.querySelector("#answer1");
const secondAnswer = document.querySelector("#answer2");
const thirdAnswer = document.querySelector("#answer3");
const forthAnswer = document.querySelector("#answer4");
const horizontalRule = document.querySelector("#questionBoxHr");
const answerStatus = document.querySelector("#answerCheck");
const allDoneBox = document.querySelector("#allDone");
const highscoreInputButton = document.querySelector("#inputButton");
const highScoresDiv = document.querySelector("#highScores")
const secondsNumber = document.querySelector("#seconds");
const gameOverDiv = document.querySelector("#gameOver");
const finalScore = document.querySelector("#finalScore");
const highscoreInputText = document.querySelector("#highscoreInputText");
const highscoreTable = document.querySelector("#highscoreTable")
const highscoreGoBackButton = document.querySelector("#highscoreGoBackButton");
let questionIndex = 0;
let secondsRemaining = 80;
let intervalReference;
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

startButton.addEventListener("click", function () {
    timer();
    startQuizContainer.classList.replace("show", "hide");
    questionsContainer.classList.replace("hide", "show");
    question.textContent = questions[0].question;
    firstAnswer.textContent = questions[0].answers[0].text
    firstAnswer.setAttribute("data", false);
    secondAnswer.textContent = questions[0].answers[1].text
    secondAnswer.setAttribute("data", false);
    thirdAnswer.textContent = questions[0].answers[2].text
    thirdAnswer.setAttribute("data", true);
    forthAnswer.textContent = questions[0].answers[3].text
    forthAnswer.setAttribute("data", false);
})

answerButtons.addEventListener("click", function (event) {
    if (event.target.getAttribute("data") === "true") {
        horizontalRule.classList.replace("hide", "show");
        answerStatus.textContent = "Correct!";
    } else {
        horizontalRule.classList.replace("hide", "show");
        answerStatus.textContent = "Incorrect!";
        secondsNumber.textContent = parseInt(secondsNumber.textContent) - 10;
        secondsRemaining = secondsRemaining - 10;
    }
    if ((questions[(questions.length - 1)].question === question.textContent) && (event.target.getAttribute("data") === "true" || event.target.getAttribute("data") === "false")) {
        console.log("success");
        clearInterval(intervalReference);
        finalScore.textContent = secondsNumber.textContent;
    }
    setTimeout(goToNextQuestion, 2000);
});

function goToNextQuestion() {
    questionIndex++
    if (questionIndex === questions.length) {
        allDoneBox.classList.replace("hide", "show");
        questionsContainer.classList.replace("show", "hide");
        horizontalRule.classList.replace("show", "hide");
    } else {
        question.textContent = questions[questionIndex].question;
        firstAnswer.textContent = questions[questionIndex].answers[0].text
        firstAnswer.setAttribute("data", questions[questionIndex].answers[0].correct);
        secondAnswer.textContent = questions[questionIndex].answers[1].text
        secondAnswer.setAttribute("data", questions[questionIndex].answers[1].correct);
        thirdAnswer.textContent = questions[questionIndex].answers[2].text
        thirdAnswer.setAttribute("data", questions[questionIndex].answers[2].correct);
        forthAnswer.textContent = questions[questionIndex].answers[3].text
        forthAnswer.setAttribute("data", questions[questionIndex].answers[3].correct);
        horizontalRule.classList.replace("show", "hide");
        answerStatus.textContent = "";
    }
}

highscoreInputButton.addEventListener("click", function () {
    allDoneBox.classList.replace("show", "hide");
    highScoresDiv.classList.replace("hide", "show");
    let newTableRow = document.createElement("tr");
    let newTableCell = document.createElement("td");
    newTableCell.textContent = (highscoreInputText.value).toUpperCase() + " - " + secondsNumber.textContent;
    newTableRow.appendChild(newTableCell);
    highscoreTable.appendChild(newTableRow);
})




function timer() {
    intervalReference = setInterval(function interval() {
        secondsRemaining--;
        secondsNumber.textContent = secondsRemaining;
        if (secondsRemaining === 0) {
            questionsContainer.classList.replace("show", "hide");
            gameOverDiv.classList.replace("hide", "show");
            clearInterval(intervalReference);
            setTimeout(goBackToStartPage, 1000);
            secondsRemaining = 80;
            questionIndex = 0;
        }
    }, 1000);
}

function goBackToStartPage() {
    gameOverDiv.classList.replace("show", "hide");
    startQuizContainer.classList.replace("hide", "show");
}

highscoreGoBackButton.addEventListener("click", function () {
    highScoresDiv.classList.replace("show", "hide");
    startQuizContainer.classList.replace("hide", "show");
    secondsRemaining = 80;
    secondsNumber.textContent = 0;
    answerStatus.textContent = "";
    questionIndex = 0;
})