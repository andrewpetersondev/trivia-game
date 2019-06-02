// ================================================== GLOBAL VARIABLES =================================================================

var questions = [
    {
        question: "What is the most populated city on Earth?",
        answers: ["Shanghai", "New York", "Istanbul", "Beijing"],
        correctAnswer: 0, // "Shanghai",
        animate: "https://giphy.com/gifs/earthhour-china-shanghai-connect2earth-bc1Fkp0WkSdKdEyD8X"
    },
    {
        question: "What country is Stonehenge located in?",
        answers: ["China", "Germany", "England", "France"],
        correctAnswer: 2, // "England",
        animate: "https://giphy.com/gifs/stonehenge-cidade-alm-vTELC7UdPZ8be"
    },
    {
        question: "Which of the following cities is furthest east?",
        answers: ["Boston", "San Juan", "Miami", "New York"],
        correctAnswer: 1, // "San Juan",
        animate: "https://giphy.com/gifs/history-uUmZKHjgUsROM"
    },
    {
        question: "What is the only city in the United States to have a royal palace?",
        answers: ["Salt Lake City", "Portland", "Boston", "Honolulu"],
        correctAnswer: 3, // "Honolulu",
        animate: "https://giphy.com/gifs/hawaii-honolulu-60rrYCp4ox5gidUgNq"
    },
    {
        question: "What is statistically the safest way to travel?",
        answers: ["Car", "Train", "Plane", "Boat"],
        correctAnswer: 2, // "Plane",
        animate: "https://giphy.com/gifs/indiana-jones-sean-connery-the-last-crusade-ms8sgwQuPpIQg"
    },
    {
        question: "Which country contains 60% of the world's lakes?",
        answers: ["Canada", "USA", "Russia", "China"],
        correctAnswer: 0, // "Canada",
        animate: "https://giphy.com/gifs/day-canada-tuesday-Pldo6KZZ7bUe4"
    },
    {
        question: "An average person in which country consumes 22 pounds of chocalate every year?",
        answers: ["USA", "France", "Belgium", "Switzerland"],
        correctAnswer: 3, // "Switzerland",
        animate: "https://giphy.com/gifs/taucherli-switzerland-swiss-schweiz-1kTKNxETigp5hwDohf"
    }
];

// variables for counting
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unAnswerCount = questions.length - index; // = 0;
var index = 0;
// variables for timer
var timer = 5;
var intervalId;
var isClockRunning = false;

// var userGuess;

// ================================================== FUNCTIONS =======================================================================
// function initializeGame() {
//     // select div you want data to display in
//     var gameDisplay = $("#game-display");
//     // display the first question
//     for (var i = 0; i < questions.length; i++) {
//         var questionAnswerDiv = $("<div>");
//         gameDisplay.html(questionAnswerDiv);
//         var questionDiv = $("<div>" + questions[i].question + "</div>");
//         questionDiv.addClass("question");
//         questionAnswerDiv.append(questionDiv);
//     }
// }

function startGame() {
    index = 0;
    correctAnswerCount = 0;
    incorrectAnswerCount = 0;
    unAnswerCount = questions.length - index;
    displayQuestion();
}

function displayQuestion() {
    startTimer();
    $("#timer").html("<h2> Time Remaining: " + timer + " Seconds </h2>");
    $("#show-question").html("<h2>" + questions[index].question + "</h2>");
    $("#show-possible-answers").empty();
    for (var i = 0; i < questions[index].answers.length; i++) {
        var answerChoice = $("<div>");
        answerChoice.addClass("answerChoice");
        answerChoice.attr("data-guess-value", i); // typeof i = string
        answerChoice.html(questions[index].answers[i]);
        answerChoice.click(evaluatePlayerAnswer);
        $("#show-possible-answers").append(answerChoice);
    }
    // console.log("the correct answer is at position : " + questions[index].correctAnswer);
}

function evaluatePlayerAnswer() {
    // 1. store player answer as number
    userGuess = parseInt($(this).attr("data-guess-value"));
    // check the type of correctAnswer variable , check the type of user guess variable , check user guess variable
    // console.log("Type of correctAnswer variable : " + typeof (questions[index].correctAnswer)); // logs number
    // console.log("Type of userGuess variable : " + typeof (userGuess)); // logs number
    // console.log("userGuess = " + userGuess); // logs number
    // 2. if player answer is correct then ...
    if (userGuess === questions[index].correctAnswer) {
        correctAnswerCount++;
        stopTimer();
        // userGuess;
        console.log("Correct! : " + questions[index].correctAnswer);
    }
    // 3. if the player is wrong then ... 
    else {
        console.log("Wrong!! Correct Answer Position is : " + questions[index].correctAnswer);
        incorrectAnswerCount++;
    }
}

function showSolution() {
    // 1. if user guessed correct show ... (Correct! And show the gif of the correct answer)
    $("#game-display").hide();
    $("#solution").show();
    var correctAnswer = questions[index].answers[questions[index].correctAnswer];
    $("#solution").append("the correct answer is : " + correctAnswer);
    // 2. if user guessed incorrect show ... (Nope! The correct answer was : questions[index].correctAnswer. And show gif of correct answer)
    // 3. if time runs out show ... (Out of time! The correct answer was : questions[index].correctAnswer. And show gif of correct answer)
}

function displayNextQuestion() {
    // 1. if there is another question display it
    if (index < questions.length - 1) {
        displayQuestion();
    }
}


function startTimer() {
    // if (!isClockRunning) {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    isClockRunning = true;
    // }
}

function decrement() {
    timer--;
    $("#timer").html("<h2> Time Remaining: " + timer + " Seconds </h2>");
    if (timer === 0) {
        stopTimer();
        showSolution();
        index++;
        timer = 5;
        startTimer();
        displayQuestion();
        unAnswerCount++;
        incorrectAnswerCount++;
    }
}

function stopTimer() {
    clearInterval(intervalId);
}

// ================================================== PLAY GAME  =======================================================================
$("#solution").hide();

$("#restart").hide();

$("#start").on("click", function () {
    $("#start").hide();
    startGame();
})

$(".answerChoice").on("click", function () {
    evaluatePlayerAnswer();
})
