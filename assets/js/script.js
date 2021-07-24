// starting values for high score and timer
let highScore = 0;
let timeLeft = 120;
let timer

let shuffledQuestions, questionIndex

let quizEl = document.getElementById("questions")
let answerOptionsEl = document.getElementById("answer-options")



let questions = [
    {
        question: "What HTML element do we put JavaScript code inside of?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<code>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<non-html>", correct: false }
        ],
    },
    {
        question: "What HTML element will all of the user viewed code be wrapped in?",
        answers: [
            { text: "<header>", correct: false },
            { text: "<footer>", correct: false },
            { text: "<body>", correct: true },
            { text: "<html>", correct: false }
        ]
    },
    {
        question: 'True or False: alert("This is an alert message.") is how you write an alert message in Javascript.',
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
    },
    {
        question: "What is the correct way to create a function in Javascript?",
        answers: [
            { text: "function = thisIsMyFunction()", correct: false },
            { text: "function myFunction()", correct: true },
            { text: "let function()", correct: false },
            { text: "var function()", correct: false }
        ]
    },
    {
        question: "How do you call a function that has been named 'codeFunction'?",
        answers: [
            { text: "const codeFunction()", correct: false },
            { text: "run function codeFunction()", correct: false },
            { text: "run codeFunction()", correct: false },
            { text: "codeFunction()", correct: true }
        ],
    },
    {
        question: "Which is the correct way to write an IF statement in JavaScript?",
        answers: [
            { text: "if (myVariable === 2)", correct: true },
            { text: "if myVariable === 2", correct: false },
            { text: "if myVariable === 2 then", correct: false },
            { text: "if (myVariable) === 2", correct: false }
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

    timer = setInterval(function() {
        document.getElementById("timer").innerHTML = "Timer: " + timeLeft;
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Time is up!"
        }
    }, 1000);
    nextQuestion();
}

// move to the next question
function nextQuestion() {
    console.log(shuffledQuestions)
    showQuestion(shuffledQuestions[questionIndex])
}

function showQuestion(question) {
    quizEl.innerText = question.question
    answerOptionsEl.innerHTML = "";
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        button.value = answer.correct;
        console.log(answer.correct);
        button.setAttribute("id", "btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        
        answerOptionsEl.appendChild(button)
    })
}

// pick an answer
function selectAnswer(event) {
    if (shuffledQuestions.length > questionIndex + 1) {
        questionIndex += 1;
        console.log(event.target.value);
        if (event.target.value === "true") {
            highScore += 10;
            answerOptionsEl.append("Correct")
        }
        else {
            timeLeft -= 10;
        }
        console.log("This is working", questionIndex)
        setTimeout(function() {
            nextQuestion();
        }, 1)
        console.log(highScore);
    }
    else {
        questionsEl.classList.add("hidden");
        clearInterval(timer);
        highScore();
    }
}



let firstClickEl = document.getElementById("first-click");
let questionsEl = document.getElementById("questions-container");
let startWordsEl = document.getElementById("start-words");
let timerStartEl = document.getElementById("timer");
let startTitleEl = document.getElementById("start-title");
let answerClick = document.getElementById("btn");

firstClickEl.addEventListener("click", startQuiz);