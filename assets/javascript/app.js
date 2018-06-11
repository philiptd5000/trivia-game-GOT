console.log('CONNECTED');

//https://www.fromthegrapevine.com/quizzes/arts/quiz-trivia-game-of-thrones

let numOne = new QuestionGenerator("How did Daenerys Targaryen eventually hatch her dragon eggs?", "In a funeral pyre", "In a lightning storm", "In a fireplace", "In a frozen cave", "In a funeral pyre", "At the end of Season 1, Daenerys Targaryen placed her three dragon eggs on the funeral pyre of her late husband. She then walked into the flames and emerged from the ashes the next morning holding three newly hatched dragons.");
let numTwo = new QuestionGenerator("Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?", "Chicago", "New York City", "San Diego", "Boston", "San Diego", "The 2015 San Diego Comic-Con played host to the 'Game of Thrones' Exhibition in the U.S. Over the next 12 months, the exhibit also visited Spain, Israel, France, England, Germany and Sweden.");
let numThree = new QuestionGenerator("The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:", "Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "Valar Morgooglis or 'all must must dream'", "Valar Dohaeris or 'all men must serve'", "The Season 2 finale was named \"Valar Morghulis\" while the Season 3 premiere was named \"Valar Dohaeris.\" In 2014, the Brewery Ommegang created a beer called \"Valar Morghulis\", with each cork fire-branded with the response.");
let numFour = new QuestionGenerator("American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:", "Lord of the Rings", "Highlander", "The Chronicles of Narnia", "The Legend of Zelda", "The Chronicles of Narnia", "Dinklage played Trumpkin in the 2008 film \"The Chronicles of Narnia: Prince Caspian.\" He was not only the first person cast for the \"Game of Thrones\" series, but also the only person author George R.R. Martin wanted to play Tyrion.");
let numFive = new QuestionGenerator("What is the only thing that can put out volatile Wildfire?", "Sand", "Water", "Dragon's blood", "Sunlight", "Sand", "So unstable that even strong sunlight can set it ablaze, Wildfire is an extremely volatile substance that can only be extinguished with copious amounts of sand.");

let triviaArr = [numOne, numTwo, numThree, numFour, numFive];
let correctTally = 0;
let incorrectTally = 0;

let questionTimerRunning = false;
let moreInfoTimerRunning = false;
let intervalIdOne;
let intervalIdTwo;

let questionNum = 0; /*questionNumber = number that will determine which 'page'/question to render using renderQuestion and triviaQuestionArr array */

let timer = {
    questionTimer: 30,
    moreInfoTimer: 10,

    reset: function() {
        timer.questionTimer = 30;
        timer.moreInfoTimer = 10;    
    },

    startQuestionTimer: function() {
        if (!questionTimerRunning) {
            intervalIdOne = setInterval(timer.questionTimerCountdown, 1000);
            questionTimerRunning = true;
        }
    },
    startMoreInfoTimer: function() {
        if (!moreInfoTimerRunning) {
            intervalIdTwo = setInterval(timer.moreInfoTimerCountdown, 1000);
            moreInfoTimerRunning = true;
        }
    },

    questionTimerCountdown: function() {
        if(timer.questionTimer <= 0) {
            timer.reset();
            renderMoreInfoPage(triviaArr, questionNum);
            //start moreInfoPage Timer(?)
            //moreInfoPageTimer = 0 --> increment questionNum
            //OR on "NEXT" btn click --> increment questionNum
        } else {
            timer.questionTimer--;
            let timeLeft = timer.questionTimer;
            console.log(timeLeft);
            $('#time-remaining').text(`${timeLeft}`);
        }
        /*if timer.questionTimer <= 0 increment page number and render new page*/
        /*alternately, page click or guess will reset timer and render new page */
    }

}

function renderMoreInfoPage(triviaArr, questionNum) {
    
    $('.more-info').html(`
        <div class="col-6"><h3>MORE INFO:</h3></div>
    `)
    $('.more-info-row').html(`
    <div class="col-6"><h6>${triviaArr[questionNum].moreInfo}</h6></div>
    `)
}

function renderQuestionPage(triviaArr, questionNum) {

    $('.question-row')
        .html(`
            <div class="col-4"><h4>${triviaArr[questionNum].ask()}</h4></div>
        `)

    $('.answer-row')
        .html(`
            <div class="col-4">
                <ul>
                    <li class="clickToGuess">${triviaArr[questionNum].optionA}</li>
                    <li class="clickToGuess">${triviaArr[questionNum].optionB}</li>
                    <li class="clickToGuess">${triviaArr[questionNum].optionC}</li>
                    <li class="clickToGuess">${triviaArr[questionNum].optionD}</li>
                <ul>
            </div>
        `)

    $('.clickToGuess').on('click', function(){
        if($(this).text() === triviaArr[questionNum].Answer) {
            alert('CORRECT!');
            correctTally++;
        } else {
            alert('INCORRECT!');
            incorrectTally++;
            }
        })
    
} /*END RENDER QUESTION()*/

function renderScore() {
    // RENDER SCORES ON SCREEN WHEN GAME TIMER RUNS OUT
    console.log(`TOTAL CORRECT: ${correctTally}`);
    console.log(`TOTAL INCORRECT: ${incorrectTally}`);
}

// renderQuestion(triviaArr, questionNum);
timer.startQuestionTimer();
renderQuestionPage(triviaArr, questionNum);
// renderMoreInfoPage(triviaArr, questionNum);




//QUESTION CONSTRUCTOR:
function QuestionGenerator(Question, optionA, optionB, optionC, optionD, Answer, moreInfo) {
    this.Question = Question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.Answer = Answer;
    this.moreInfo = moreInfo;
    this.ask = function () {
        return this.Question;
    }
};

