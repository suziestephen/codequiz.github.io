//Variables
var timerInterval;
var timeLeft = 120;
var timeSpan = document.querySelector("#time-left");
var quizSection = document.querySelector(".quiz-section");
var quizIntro = document.querySelector(".quiz-intro");
var quizContent;
var quizDone;

//Main Quiz Functions
function checkAnswer(index, buttonID) {    
    var isCorrect = (questions[index].choices[buttonID] === 
        questions[index].answer);

    var feedback = document.createElement("div");
    var pEl = document.createElement("p");
    feedback.setAttribute("class", "feedback");

    feedback.appendChild(pEl);
    quizSection.appendChild(feedback);
    
    if (isCorrect) {
        pEl.textContent = "You got that one right!";
    }
    else {
        pEl.textContent = "Sorry, that answer is incorrect!";
        if (timeLeft <= 15) {
            timeLeft = 0;
        }
        else {
            timeLeft -= 15;
        }
    }

    var removeFeedback = setTimeout(function() {
        quizSection.removeChild(feedback);
    }, 1000)
}


function startQuiz() {
    var index = 0;
    
    quizContent = document.createElement("div");
    quizContent.setAttribute("class", "quiz-section");


    var quizQuestion = document.createElement("h2");
    quizQuestion.setAttribute("class", "quiz-question");
    quizQuestion.textContent = questions[index].title;

    var quizAnswers = document.createElement("ul");
    quizAnswers.setAttribute("class", "quiz-answers");

    for (var i = 0; i < 4; i++) {
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "quiz-answer");
        buttonEl.setAttribute("data-id", i);
        buttonEl.textContent = (i + 1) + ". " + questions[index].choices[i];

        listEl.appendChild(buttonEl);
        quizAnswers.appendChild(listEl);
    }

    quizContent.appendChild(quizQuestion);
    quizContent.appendChild(quizAnswers);
    quizSection.replaceChild(quizContent, quizIntro);

    var buttonArray = quizAnswers.querySelectorAll("button");
    
    quizAnswers.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("button")) {
            var buttonID = element.getAttribute("data-id");
            checkAnswer(index, buttonID);
            index++;           
            if (index === questions.length) {
                stopTimer();
                allDone();
                return null;
            }
            quizQuestion.textContent = questions[index].title;
            for (var j = 0; j < 4; j++) {
                buttonArray[j].textContent = (j + 1) + ". " + questions[index].choices[j];
            }
        }
    })
}

function allDone() {
    quizDone = document.createElement("div");
    quizDone.setAttribute("class", "quiz-done");    
    

    var h1El = document.createElement("h1");
    h1El.textContent = "Finished!";

    var pEl = document.createElement("p");
    pEl.textContent = "Final score " + timeLeft + ".";

    var formEl = document.createElement("form");
    formEl.setAttribute("class", "quiz-answers");
    var labelEl = document.createElement("label");
    labelEl.textContent = "Put in your initials: ";
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    var submitEl = document.createElement("input");
    submitEl.setAttribute("type", "submit");
    submitEl.setAttribute("id", "submit");
    labelEl.appendChild(inputEl);
    formEl.appendChild(labelEl);
    formEl.appendChild(submitEl);

    quizDone.appendChild(h1El);
    quizDone.appendChild(pEl);
    quizDone.appendChild(formEl);
    quizSection.replaceChild(quizDone, quizContent);

    submitEl.addEventListener("click", function(event) {
        event.preventDefault();

        if (inputEl.value === "") {
            alert("You must put in your initals!");
            return null;
        }

        saveScore(inputEl.value, timeLeft);
        window.location = "highscores.html";
    })
}

function startTimer() {
    timeSpan.textContent = timeLeft;

    timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            stopTimer();
            allDone();
            return null;
        }
        timeLeft--;
        timeSpan.textContent = timeLeft;
    }, 1000)
}

function stopTimer() {
    timeSpan.textContent = timeLeft;
    clearInterval(timerInterval);
}

document.querySelector("#start-quiz").addEventListener("click", function() {
    startTimer();
    startQuiz();
})


