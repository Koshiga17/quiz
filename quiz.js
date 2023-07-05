// Define your questions here
var questions = [
    {
        prompt: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        correctOption: 1
    },
    {
        prompt: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Salvador Dalí"],
        correctOption: 1
    },
    {
        prompt: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Earth", "Saturn"],
        correctOption: 1
    }
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var submitButton = document.getElementById("submit-btn");

function loadQuestion() {
    var question = questions[currentQuestion];
    questionElement.textContent = question.prompt;

    optionsElement.innerHTML = "";
    for (var i = 0; i < question.options.length; i++) {
        var option = document.createElement("button");
        option.textContent = question.options[i];
        option.classList.add("option-btn");
        option.setAttribute("data-index", i);
        optionsElement.appendChild(option);
    }
}

function selectAnswer(event) {
    var selectedOptionIndex = parseInt(event.target.getAttribute("data-index"));
    var question = questions[currentQuestion];

    if (selectedOptionIndex === question.correctOption) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "You scored " + score + "/" + questions.length + ".";
    submitButton.style.display = "none";
}

loadQuestion();

submitButton.addEventListener("click", selectAnswer);
