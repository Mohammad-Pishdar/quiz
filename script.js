const startButton = document.querySelector("#startQuizButton");
const startQuizContainer = document.querySelector("#startQuizContainer")
const questionsContainer = document.querySelector("#question-container");

startButton.addEventListener("click", function () {
    startQuizContainer.classList.replace("show", "hide");
    questionsContainer.classList.replace("hide", "show");
})