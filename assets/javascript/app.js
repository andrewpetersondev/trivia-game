// questions array
var questions = [
    {
        question: "What is the most populated city on Earth?",
        answers: ["Shanghai", "New York", "Istanbul", "Beijing"],
        correctAnswer: "Shanghai",
        animate: "https://media.giphy.com/media/bc1Fkp0WkSdKdEyD8X/source.gif"
    },
    {
        question: "What country is Stonehenge located in?",
        answers: ["China", "Germany", "England", "France"],
        correctAnswer: "England",
        animate: "https://media.giphy.com/media/vTELC7UdPZ8be/giphy.gif"
    },
    {
        question: "Which of the following cities is furthest east?",
        answers: ["Boston", "San Juan", "Miami", "New York"],
        correctAnswer: "San Juan",
        animate: "https://media.giphy.com/media/uUmZKHjgUsROM/giphy.gif"
    },
    {
        question: "What is the only city in the United States to have a royal palace?",
        answers: ["Salt Lake City", "Portland", "Boston", "Honolulu"],
        correctAnswer: "Honolulu",
        animate: "https://media.giphy.com/media/j04iE8CuYb9rG/giphy.gif"
    },
    {
        question: "What is statistically the safest way to travel?",
        answers: ["Car", "Train", "Plane", "Boat"],
        correctAnswer: "Plane",
        animate: "https://media.giphy.com/media/ms8sgwQuPpIQg/giphy.gif"
    },
    {
        question: "Which country contains 60% of the world's lakes?",
        answers: ["Canada", "USA", "Russia", "China"],
        correctAnswer: "Canada",
        animate: "https://media.giphy.com/media/Pldo6KZZ7bUe4/giphy.gif"
    },
    {
        question: "An average person in which country consumes 22 pounds of chocolate every year?",
        answers: ["USA", "France", "Belgium", "Switzerland"],
        correctAnswer: "Switzerland",
        animate: "https://media.giphy.com/media/5dUDOgsIZQ4RO5U7wK/source.gif"
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
        $('#subwrapper').append("<img src='" + questions[game.currentQuestion].animate + "'>");
        console.log("<img src='" + questions[game.currentQuestion].animate + "'>");
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
