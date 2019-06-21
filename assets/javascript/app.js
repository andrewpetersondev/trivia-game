// questions array
var questions = [
    {
        question: "What is the most populated city on Earth?",
        answers: ["Shanghai", "New York", "Istanbul", "Beijing"],
        correctAnswer: "Shanghai",
        animate: "https://giphy.com/gifs/earthhour-china-shanghai-connect2earth-bc1Fkp0WkSdKdEyD8X"
    },
    {
        question: "What country is Stonehenge located in?",
        answers: ["China", "Germany", "England", "France"],
        correctAnswer: "England",
        animate: "https://giphy.com/gifs/stonehenge-cidade-alm-vTELC7UdPZ8be"
    },
    {
        question: "Which of the following cities is furthest east?",
        answers: ["Boston", "San Juan", "Miami", "New York"],
        correctAnswer: "San Juan",
        animate: "https://giphy.com/gifs/history-uUmZKHjgUsROM"
    },
    {
        question: "What is the only city in the United States to have a royal palace?",
        answers: ["Salt Lake City", "Portland", "Boston", "Honolulu"],
        correctAnswer: "Honolulu",
        animate: "https://giphy.com/gifs/hawaii-honolulu-60rrYCp4ox5gidUgNq"
    },
    {
        question: "What is statistically the safest way to travel?",
        answers: ["Car", "Train", "Plane", "Boat"],
        correctAnswer: "Plane",
        animate: "https://giphy.com/gifs/indiana-jones-sean-connery-the-last-crusade-ms8sgwQuPpIQg"
    },
    {
        question: "Which country contains 60% of the world's lakes?",
        answers: ["Canada", "USA", "Russia", "China"],
        correctAnswer: "Canada",
        animate: "https://giphy.com/gifs/day-canada-tuesday-Pldo6KZZ7bUe4"
    },
    {
        question: "An average person in which country consumes 22 pounds of chocolate every year?",
        answers: ["USA", "France", "Belgium", "Switzerland"],
        correctAnswer: "Switzerland",
        animate: "https://giphy.com/gifs/taucherli-switzerland-swiss-schweiz-1kTKNxETigp5hwDohf"
    }
];

// game object
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 15,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("time is up");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html('<h2> Time Remaining <span id="counter"> 15 </span> Seconds </h2>');
        $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function () {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function () {
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2>Out of Time</h2>');
        $('#subwrapper').append('<h3> the correct answer was : ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    results: function () {
        clearInterval(timer);
        $('#subwrapper').html("<h2>All Done</h2>");
        $('#subwrapper').append('<h3>correct: ' + game.correct + '</h3>');
        $('#subwrapper').append('<h3>incorrect: ' + game.incorrect + '</h3>');
        $('#subwrapper').append('<h3>unanswered: ' + game.unanswered + '</h3>');
        $('#subwrapper').append('<button id="reset">reset</button>');
    },
    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function () {
        console.log("correct");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> you got it right!</h2>');
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly: function () {
        console.log("wrong");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2> you got it wrong!</h2>');
        $('#subwrapper').append('<h3> the correct answer was : ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
};

// main processes
// ===============================================================================================

$("#start").on("click", function () {
    $("#start").remove();
    game.loadQuestion();
});

$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
});

$(document).on('click', '#reset', function () {
    game.reset();
});


// // variables for counting
// var correctAnswerCount = 0;
// var incorrectAnswerCount = 0;
// var unAnswerCount = 0;
// var index = 0;
// // variables for timer
// var timer = 05;
// var intervalId;
// var isClockRunning = false;
// // var userGuess;
// // ================================================== FUNCTIONS =======================================================================
// function startGame() {
//     index = 0;
//     correctAnswerCount = 0;
//     incorrectAnswerCount = 0;
//     unAnswerCount = 0;
//     timer = 05;
//     intervalId;
//     isClockRunning = false;
//     displayQuestion();
// }
// function displayQuestion() {
//     $("#solution").hide();
//     startTimer();
//     $("#game-display").show();
//     $("#show-question").html("<h2>" + questions[index].question + "</h2>");
//     // console.log("current question = " + questions[index].question);
//     $("#show-possible-answers").empty();
//     for (var i = 0; i < questions[index].answers.length; i++) {
//         var answerChoice = $("<div>");
//         answerChoice.addClass("answerChoice");
//         answerChoice.attr("data-guess-value", i); // typeof i = string
//         answerChoice.html(questions[index].answers[i]);
//         answerChoice.click(evaluatePlayerAnswer);
//         $("#show-possible-answers").append(answerChoice);
//     }
// }
// function evaluatePlayerAnswer() {
//    var userGuess = parseInt($(this).attr("data-guess-value"));
//     // console.log("Type of correctAnswer variable : " + typeof (questions[index].correctAnswer)); // logs number
//     console.log(userGuess);
//     console.log("userGuess = " + userGuess);
//     console.log("typeof userGuess = " + typeof(userGuess));
//     if (userGuess === questions[index].correctAnswer) {
//         correctAnswerCount++;
//         stopTimer();
//         // console.log("Correct! : " + questions[index].correctAnswer);
//     }
//     else {
//         console.log("Wrong!! Correct Answer Position is : " + questions[index].correctAnswer);
//         incorrectAnswerCount++;
//     }
// }
// function showSolution() {
//     // 1. if user guessed correct show ... (Correct! And show the gif of the correct answer)
//     $("#game-display").hide();
//     var correctAnswer = questions[index].answers[questions[index].correctAnswer];
//     // console.log("correct answer = " + correctAnswer);
//     $("#solution").html("correct answer = " + correctAnswer);
//     $("#solution").append("You are Correct! " + correctAnswer);
//     // 2. if user guessed incorrect show ... (Nope! The correct answer was : questions[index].correctAnswer. And show gif of correct answer)
//     $("#solution").append("Wrong ! the correct answer is : " + correctAnswer);
//     // 3. if time runs out show ... (Out of time! The correct answer was : questions[index].correctAnswer. And show gif of correct answer)
//     $("#solution").append("You ran out of time ! the correct answer is : " + correctAnswer);
//     $("#solution").show();
// }
// function startTimer() {
//     // if (!isClockRunning) {
//     timer = 05;
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//     isClockRunning = true;
//     // }
// }
// function decrement() {
//     timer--;
//     $("#timer").html("<h2> Time Remaining: " + timer + " Seconds </h2>");
//     if (timer === 0) {
//         // stopTimer();
//         showSolution();
//         unAnswerCount++;
//         index++;
//         displayQuestion();
//     }
// }
// function stopTimer() {
//     clearInterval(intervalId);
// }
// // ================================================== PLAY GAME  =======================================================================
// $("#solution").hide();
// $("#restart").hide();
// $("#start").on("click", function () {
//     $("#start").hide();
//     startGame();
// })
// $(".answerChoice").on("click", function () {
//     // evaluatePlayerAnswer(); // this is not needed because of click event in displayQuestions()
//     displayQuestion();
// })
// // $(document).on("click", function (event) {
// //     displayQuestion();
// // })