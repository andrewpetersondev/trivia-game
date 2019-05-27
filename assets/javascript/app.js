// =====================================================================================================================================
// ================================================== GLOBAL VARIABLES =================================================================
// =====================================================================================================================================

var topics = [
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
]

var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unAnswerCount = 0;
var index = 0;
var timer = 30;
var intervalId;
var isClockRunning = false;

// =====================================================================================================================================
// ================================================== FUNCTIONS =======================================================================
// =====================================================================================================================================

// STARTGAME(); 

// RESET();

// COUNTDOWNTIMER();

// 


// =====================================================================================================================================
// ================================================== PLAY GAME  =======================================================================
// =====================================================================================================================================

// $(document).ready(function () {
//     // code goes here
// });

// ================================== PSUEDOCODE ========================================================= 

// the player will click a button to start the game

// when the game starts
// a question is displayed
// possible answers are displayed
// a timer is started and the player has 15 seconds to answer the question
// the player clicks button A, button B, button C, or button D

// evaluate if the player selected the correct answer
// if the player selected the correct answer, then