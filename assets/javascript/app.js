// =====================================================================================================================================
// ================================================== GLOBAL VARIABLES =================================================================
// =====================================================================================================================================

var questionsArray = [
    {
        question: "What is the most populated city on Earth?",
        answers: ["A. Shanghai", "B. New York", "C. Istanbul", "D. Beijing"],
        correctAnswer: "Shanghai",
        animate: "https://giphy.com/gifs/earthhour-china-shanghai-connect2earth-bc1Fkp0WkSdKdEyD8X"
    },
    {
        question: "What country is Stonehenge located in?",
        answers: ["A. China", "B. Germany", "C. England", "D. France"],
        correctAnswer: "England",
        animate: "https://giphy.com/gifs/stonehenge-cidade-alm-vTELC7UdPZ8be"
    },
    {
        question: "Which of the following cities is furthest east?",
        answers: ["A. Boston", "B. San Juan", "C. Miami", "D. New York"],
        correctAnswer: "San Juan",
        animate: "https://giphy.com/gifs/history-uUmZKHjgUsROM"
    },
    {
        question: "What is the only city in the United States to have a royal palace?",
        answers: ["A. Salt Lake City", "B. Portland", "C. Boston", "D. Honolulu"],
        correctAnswer: "Honolulu",
        animate: "https://giphy.com/gifs/hawaii-honolulu-60rrYCp4ox5gidUgNq"
    },
    {
        question: "What is statistically the safest way to travel?",
        answers: ["A. Car", "B. Train", "C. Plane", "D. Boat"],
        correctAnswer: "Plane",
        animate: "https://giphy.com/gifs/indiana-jones-sean-connery-the-last-crusade-ms8sgwQuPpIQg"
    },
    {
        question: "Which country contains 60% of the world's lakes?",
        answers: ["A. Canada", "B. USA", "C. Russia", "D. China"],
        correctAnswer: "Canada",
        animate: "https://giphy.com/gifs/day-canada-tuesday-Pldo6KZZ7bUe4"
    },
    {
        question: "An average person in which country consumes 22 pounds of chocalate every year?",
        answers: ["A. USA", "B. France", "C. Belgium", "D. Switzerland"],
        correctAnswer: "Switzerland",
        animate: "https://giphy.com/gifs/taucherli-switzerland-swiss-schweiz-1kTKNxETigp5hwDohf"
    },
]

var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unAnswerCount = 0;
var index = 0;
var timer = 15;
var intervalId;
var isClockRunning = false;

// =====================================================================================================================================
// ================================================== FUNCTIONS =======================================================================
// =====================================================================================================================================

// playGame(); 

// displayQuestion();

// evaluatePlayerAnswer();

// resetGame();


// Timers 

// function to start timer
// runTimer();

// function to set pace of timer
// decrement();

// function to stop timer
// stopTimer();

// =====================================================================================================================================
// ================================================== PLAY GAME  =======================================================================
// =====================================================================================================================================

// $(document).ready(function () {
//     // code goes here
// });

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
