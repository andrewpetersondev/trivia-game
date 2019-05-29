// =====================================================================================================================================
// ================================================== GLOBAL VARIABLES =================================================================
// =====================================================================================================================================

var questions = [
    {
        question: "What is the most populated city on Earth?",
        answers: ["A. Shanghai", "B. New York", "C. Istanbul", "D. Beijing"],
        correctAnswer: 0, // "Shanghai",
        animate: "https://giphy.com/gifs/earthhour-china-shanghai-connect2earth-bc1Fkp0WkSdKdEyD8X"
    },
    {
        question: "What country is Stonehenge located in?",
        answers: ["A. China", "B. Germany", "C. England", "D. France"],
        correctAnswer: 2, // "England",
        animate: "https://giphy.com/gifs/stonehenge-cidade-alm-vTELC7UdPZ8be"
    },
    {
        question: "Which of the following cities is furthest east?",
        answers: ["A. Boston", "B. San Juan", "C. Miami", "D. New York"],
        correctAnswer: 1, // "San Juan",
        animate: "https://giphy.com/gifs/history-uUmZKHjgUsROM"
    },
    {
        question: "What is the only city in the United States to have a royal palace?",
        answers: ["A. Salt Lake City", "B. Portland", "C. Boston", "D. Honolulu"],
        correctAnswer: 3, // "Honolulu",
        animate: "https://giphy.com/gifs/hawaii-honolulu-60rrYCp4ox5gidUgNq"
    },
    {
        question: "What is statistically the safest way to travel?",
        answers: ["A. Car", "B. Train", "C. Plane", "D. Boat"],
        correctAnswer: 2, // "Plane",
        animate: "https://giphy.com/gifs/indiana-jones-sean-connery-the-last-crusade-ms8sgwQuPpIQg"
    },
    {
        question: "Which country contains 60% of the world's lakes?",
        answers: ["A. Canada", "B. USA", "C. Russia", "D. China"],
        correctAnswer: 0, // "Canada",
        animate: "https://giphy.com/gifs/day-canada-tuesday-Pldo6KZZ7bUe4"
    },
    {
        question: "An average person in which country consumes 22 pounds of chocalate every year?",
        answers: ["A. USA", "B. France", "C. Belgium", "D. Switzerland"],
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

// function to start game
function playGame() {
    // display the next question by targeting $("#show-question");
    $("#show-question").html("<h2>" + questions[index].question + "</h2>");

    // display the next question's answers by targeting $("#show-possible-answers");
    // iterate through answers and display to html
    for (var i = 0; i < questions[index].answers.length; i++) {

        // create a div
        var answerChoice = $("<div>");
        // add class to div
        answerChoice.addClass("answerChoice");
        // add attribute to check answer
        answerChoice.attr("data-guess-value", i);
        console.log(answerChoice);
        // html content
        answerChoice.html(questions[index].answers[i]);
        // append content to html
        $("#show-possible-answers").append(answerChoice);

    }
} 


// function showImage () {

// }

// function to display questions
function displayNextQuestion() {

    // if we are not at the last question display the next question (// if index != questions.length - 1)
    // i think this should be broken up into two or more functions
    // if (index !== questions.length - 1) {

        // display the next question by targeting $("#show-question");
        $("#show-question").html("<h2>" + questions[index].question + "</h2>");

        // display the next question's answers by targeting $("#show-possible-answers");
        // iterate through answers and display to html
        for (var i = 0; i < questions[index].answers.length; i++) {

            // create a div
            var answerChoice = $("<div>");
            // add class to div
            answerChoice.addClass("answerChoice");
            // add attribute to check answer
            answerChoice.attr("data-guess-value", i);
            console.log(answerChoice);
            // html content
            answerChoice.html(questions[index].answers[i]);
            // append content to html
            $("#show-possible-answers").append(answerChoice);

        }
        // increment index position
        // index++;
        // call showImage ();
    // }

}

// function correctAnswerFunction () {}

// evaluatePlayerAnswer();
function evaluatePlayerAnswer() {

    // user clicks an answer
    $(".answerChoice").on("click", function () {
        // store their answer in a variable
        userGuess = parseInt($(this).attr("data-guess-value"));
        alert(userGuess);
        // if user input === correct answer
        if (userGuess === questions[index].correctAnswer) {
            correctAnswerCount++;
            stopTimer();
            // clear userGuess
            // userGuess;
            console.log("Correct! : " + questions[index].correctAnswer);
        } else {
            console.log("Wrong!! Correct Answer Position : " + questions[index].correctAnswer);
        }
    })
};




// replayGame();


// ================================================ TIMERS ==========================================================================================

// function to start timer
// startTimer();
function startTimer() {
    if (!isClockRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        isClockRunning = true;
    }
}

// function to set pace of timer
// decrement();
function decrement() {
    timer--;
    $("#countdown-timer").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
        stopTimer();
        unAnswerCount++;
        // display question is wrong 
        incorrectAnswerCount++;
        // display correct answer and gif
        // display next question
    }
}

// function to stop timer
// stopTimer();
function stopTimer() {
    clearInterval(intervalId);
}

// =====================================================================================================================================
// ================================================== PLAY GAME  =======================================================================
// =====================================================================================================================================

$(document).ready(function () {
    // click start game button
    $("#start").on("click", function () {
        console.log(index);
        $("#start").hide();
        startTimer();
        playGame();
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

// ================================== PSUEDOCODE ========================================================= 

// the player will click a button to start the game

// when the game starts
// display a question with a for loop
// possible answers are displayed
// a timer is started and the player has 15 seconds to answer the question
// the player clicks button A, button B, button C, or button D

// evaluate if the player selected the correct answer
// if the player selected the correct answer, then increment correctAnswerCount, display Correct! and gif to html
// else increment incorrectAnswerCount, display Incorrect! and the correct answer and gif of correct answer to html


// display the next question 
// display the possible answers

// when game is over
// display results
// display button to restart game
