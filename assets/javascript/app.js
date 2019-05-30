$(document).ready(function () {

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

    // ================================================== FUNCTIONS =======================================================================
    // =====================================================================================================================================

    // when the player starts the game run these functions
    $("#start").on("click", function() {
        startGame();
        // insert player chooses an answer click event to see if anything logs to the console // this worked to display to console but game is still broken
        $(".answerChoice").on("click", function () {
            evaluatePlayerAnswer();
        })
    });

    function startGame() {
        $("#start").hide();
        displayQuestion();
    }

    function displayQuestion() {
        // 1. start timer
        // 2. display question
        // 3. display possible answers

        startTimer();

        $("#show-question").html("<h2>" + questions[index].question + "</h2>");

        for (var i = 0; i < questions[index].answers.length; i++) {

            var answerChoice = $("<div>");

            answerChoice.addClass("answerChoice");

            answerChoice.attr("data-guess-value", i); // according to chrome dev tools, this is stored as a string

            answerChoice.html(questions[index].answers[i]);

            $("#show-possible-answers").append(answerChoice);

        }

        // console.log("the correct answer is at position : " + questions[index].correctAnswer);

    }


    // when the player chooses an answer run these functions
    // should this be nested in the function on line 66?
    $(".answerChoice").on("click", function () {
        evaluatePlayerAnswer();
    })

    function evaluatePlayerAnswer () {
        // 1. store player answer as number
        // 2. if player answer is correct then ...
        // 3. if the player is wrong then ... 

        userGuess = parseInt($(this).attr("data-guess-value"));

        // check the type of correctAnswer variable
        console.log("Type of correctAnswer variable : " + typeof(questions[index].correctAnswer)); // logs number
        
        // check the type of user guess variable
        console.log("Type of userGuess variable : " + typeof(userGuess)); // logs number
        
        // check user guess variable
        console.log("userGuess = " + userGuess); // logs NaN
        
        if (userGuess === questions[index].correctAnswer) {
            correctAnswerCount++;
            stopTimer();
            // userGuess;
            console.log("Correct! : " + questions[index].correctAnswer);
        }
        else {
            console.log("Wrong!! Correct Answer Position is : " + questions[index].correctAnswer);
            incorrectAnswerCount++;
        }

    }



    // function correctAnswerFunction () {}

    function showImage () { 
        // 1. if user guessed correct show ... (Correct! And show the gif of the correct answer)
        // 2. if user guessed incorrect show ... (Nope! The correct answer was : questions[index].correctAnswer. And show gif of correct answer)
        // 3. if time runs out show ... (Out of time! The correct answer was : questions[index].correctAnswer. And show gif of correct answer)
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

});

    // ================================================== PLAY GAME  =======================================================================
