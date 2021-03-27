// start the game
let startQuiz = function() {
    console.log("The game has started!");
    firstClickEl.classList.add("hidden");
    startWordsEl.classList.add("hidden");
    questionsEl.classList.remove("hidden");
    timerStartEl.classList.remove("hidden");
}

// move to the next question
let nextQuestion = function() {

}

// pick an answer
let selectAnswer = function() {

}

let firstClickEl = document.getElementById("first-click");
let questionsEl = document.getElementById("questions-container");
let startWordsEl = document.getElementById("start-words");
let timerStartEl = document.getElementById("timer");

firstClickEl.addEventListener("click", startQuiz);