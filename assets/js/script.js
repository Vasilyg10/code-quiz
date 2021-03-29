// starting values for high score and timer


const highScore = 0;

let shuffledQuestions, questionIndex

let quizEl = document.getElementById("questions")
let answerOptionsEl = document.getElementById("answer-options")

let questions = [
    {
        question: "What color is the sky??",
        answers: [
            { text: "Blue", correct: true },
            { text: "Red", correct: false }
        ],
        question: "What color is the grass?",
        answers: [
            { text: "Green", correct: true },
            { text: "Orange", correct: false }
        ]
    }
]


// start the game
let startQuiz = function() {
    firstClickEl.classList.add("hidden");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    startWordsEl.classList.add("hidden");
    startTitleEl.classList.add("hidden");
    questionsEl.classList.remove("hidden");

    let count = 60;
    let timer = setInterval(function() {
        document.getElementById("timer").innerHTML = "Timer: " + count;
        count--;
        if (count <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Time is up!"
        }
    }, 1000);
    nextQuestion();
}

// move to the next question
function nextQuestion() {
    showQuestion(shuffledQuestions[questionIndex])
}

function showQuestion(question) {
    quizEl.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        button.setAttribute("id", "btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerOptionsEl.appendChild(button)
    })
}

// pick an answer
function selectAnswer() {
    if (shuffledQuestions.length > questionIndex + 1)
    questionIndex++;
    nextQuestion();
}

let firstClickEl = document.getElementById("first-click");
let questionsEl = document.getElementById("questions-container");
let startWordsEl = document.getElementById("start-words");
let timerStartEl = document.getElementById("timer");
let startTitleEl = document.getElementById("start-title");
let answerClick = document.getElementById("btn");

firstClickEl.addEventListener("click", startQuiz);