// =====================================================================================================================================
// ================================================== GLOBAL VARIABLES =================================================================
// =====================================================================================================================================

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

var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unAnswerCount = questions.length; // = 0;
var index = 0;
var timer = 30;
var intervalId;
var isClockRunning = false;
var userGuess;

// =====================================================================================================================================
// ================================================== FUNCTIONS =======================================================================
// =====================================================================================================================================

// this should be changed since the game is started with a button click
// the first function should be display question
// function to start game
function startGame() {

    $("#show-question").html("<h2>" + questions[index].question + "</h2>");

    for (var i = 0; i < questions[index].answers.length; i++) {

        var answerChoice = $("<div>");

        answerChoice.addClass("answerChoice");

        answerChoice.attr("data-guess-value", i);

        // console.log(answerChoice);

        answerChoice.html(questions[index].answers[i]);

        $("#show-possible-answers").append(answerChoice);

    }
}

// evaluatePlayerAnswer();
function evaluatePlayerAnswer() {

    $(".answerChoice").on("click", function () {

        userGuess = parseInt($(this).attr("data-guess-value"));

        // alert(userGuess);

        if (userGuess === questions[index].correctAnswer) {
            correctAnswerCount++;
            stopTimer();
            // clear userGuess?
            // userGuess;
            console.log("Correct! : " + questions[index].correctAnswer);
        }
        else {
            console.log("Wrong!! Correct Answer Position : " + questions[index].correctAnswer);
        }

    })

};

// function correctAnswerFunction () {}

// function showImage () { // }

// function to display questions
function displayNextQuestion() {

    // if we are not at the last question display the next question (// if index != questions.length - 1)
    // i think this should be broken up into two or more functions
    // if (index !== questions.length - 1) {

    $("#show-question").html("<h2>" + questions[index].question + "</h2>");

    for (var i = 0; i < questions[index].answers.length; i++) {

        var answerChoice = $("<div>");

        answerChoice.addClass("answerChoice");

        answerChoice.attr("data-guess-value", i);

        // console.log(answerChoice);

        answerChoice.html(questions[index].answers[i]);

        $("#show-possible-answers").append(answerChoice);

    }
    // increment index position
    // index++;
    // call showImage ();
    // }

}




// replayGame();


// ================================================ TIMERS ==========================================================================================

// function to start timer
function startTimer() {
    if (!isClockRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        isClockRunning = true;
    }
}

// function to set pace of timer
function decrement() {
    timer--;
    $("#countdown-timer").html("<h2> Time Remaining: " + timer + " Seconds </h2>");
    if (timer === 0) {
        stopTimer();
        unAnswerCount++;
        // display question is wrong 
        incorrectAnswerCount++;
        // display correct answer and gif
    }
}

// function to stop timer
function stopTimer() {
    clearInterval(intervalId);
}

// =====================================================================================================================================
// ================================================== PLAY GAME  =======================================================================
// =====================================================================================================================================

$(document).ready(function () {

    $("#start").on("click", function () {
    
        // console.log(index);
    
        $("#start").hide();
    
        startTimer();
    
        startGame();
    
        // console.log(questions[index].correctAnswer);
    
        // displayQuestion();
    
        // displayAnswers();
    
        $(".answerChoice").on("click", function () {
            evaluatePlayerAnswer();
        })
    
        // console.log(questions[index].correctAnswer);
    
    })

    // $(".answerChoice").on("click", function () {
    //     evaluatePlayerAnswer();
    // })

});

