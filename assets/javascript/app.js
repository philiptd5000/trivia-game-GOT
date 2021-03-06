console.log('CONNECTED');

$(document).ready(function () {

    let numOne      = new QuestionGenerator("What was the name of Ned Stark's greatsword?", "Ice", "Oathkeeper", "Widow's Wail", "Northguard", "Ice", "Ice was the official sword of the Lord of Winterfell, forged from Valyrian steel and handed down over the ages. After being used to behead Ned Stark at the end of Season 1, it was subsequently melted down to forge two new swords – the Oathkeeper and Widow's Wail.");
    let numTwo      = new QuestionGenerator("How did Daenerys Targaryen eventually hatch her dragon eggs?", "In a funeral pyre", "In a lightning storm", "In a fireplace", "In a frozen cave", "In a funeral pyre", "At the end of Season 1, Daenerys Targaryen placed her three dragon eggs on the funeral pyre of her late husband. She then walked into the flames and emerged from the ashes the next morning holding three newly hatched dragons.");
    let numThree    = new QuestionGenerator("The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:", "Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "Valar Morgooglis or 'all must must dream'", "Valar Dohaeris or 'all men must serve'", "The Season 2 finale was named \"Valar Morghulis\" while the Season 3 premiere was named \"Valar Dohaeris.\" In 2014, the Brewery Ommegang created a beer called \"Valar Morghulis\", with each cork fire-branded with the response.");
    let numFour     = new QuestionGenerator("Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?", "Tyrion Lannister", "Bronn", "King Joffrey", "Jamie Lannister", "Bronn", "After a signal from Tyrion, Bronn shoots a flaming arrow into a floating trap of wildfire around Stannis Baratheon's fleet. The explosion that follows destroys dozens of ships and effectively wins the battle for King Joffrey.");
    let numFive     = new QuestionGenerator("What is the only thing that can put out volatile Wildfire?", "Sand", "Water", "Dragon's blood", "Sunlight", "Sand", "So unstable that even strong sunlight can set it ablaze, Wildfire is an extremely volatile substance that can only be extinguished with copious amounts of sand.");
    let numSix      = new QuestionGenerator("Besides dragonglass, what is the only other substance capable of defeating White Walkers?", "Weirwood", "Wildfire", "Valyrian Steel", "Snowballs", "Valyrian Steel", "Valyrian Steel is not only exceptionally sharp, strong and free of maintenance, but is also capable of taking down an immortal White Walker. The metal is easily identified by its distinctive rippled pattern." );
    let numSeven    = new QuestionGenerator("Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:", "Pride in drawing blood first", "Knowledge of poinsons", "Nighttime attacks", "Ruby-colored armor", "Knowledge of poisons", "Oberyn Martell is skilled not only in combat, but also in the use of deadly potions. In the battle against Ser Gregor Clegane that ultimately cost him his life, Martell managed to severely wound 'the mountain' with a spear tip coated in poisonous Manticore venom.");
    let numEight    = new QuestionGenerator("Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?", "Ghost", "Lady", "Nymeria", "Summer", "Lady", "After the direwolf Nymeria flees into the woods following a defensive attack against Prince Joffrey, Queen Cersei Lannister orders the execution of her pack sister, Lady. Now, two of the four remaining Stark family direwolves are in places unknown.");
    let numNine     = new QuestionGenerator("Arya's punishment for stealing from the Many-Face God is:", "Memory Loss", "Blindness", "Death", "Uncontrollable laughter", "Blindness", "After Arya takes a life that was not hers to kill, she is rendered blind as punishment. The scene, at the end of Season 5, is a new twist on Arya's efforts to become a 'faceless' assassin.");
    let numTen      = new QuestionGenerator("The Night King was created using a dagger made of:", "Valyrian Steel", "Blue ice", "Dragonglass", "Obsidian", "Dragonglass", "In season six, it's revealed that the Children of the Forest created the White Walkers during a war with the First Men. During a vision, Bran sees one of the children force a Dragonglass dagger into the chest of a captive First Man. He then transforms into the Night King.");
    let numEleven   = new QuestionGenerator("Who created the secret tunnel in the sewers under Casterly Rock?", "Tyrion Lannister", "Lord Baelish", "Jaime Lannister", "Varys", "Tyrion Lannister", "Speaking with Varys in season 2, Tyrion explains how when he came of age, his father placed him in charge of \"all the drains and cisterns in Casterly Rock.\" In season 7, Tyrion reveals that he added a secret entrance in the sewers that Daenerys' army later uses to take the fortress.");
    let numTwelve   = new QuestionGenerator("How many times has Beric Dondarrion been brought back to life?", "Three times", "Five times", "Six times", "Seven times", "Six times", "Beric Dondarrion has been resurrected by the God of Light a total of six times. His constant cheating of death comes with a price: each time, he explains, he loses some of his memories and is less himself.");
    // let EXTRA    = new QuestionGenerator("'It's nothing' were the last words of this infamous character:", "Renly Baratheon", "Tywin Lannister", "Robb Stark", "King Joffrey", "King Joffrey", "The tyrant King Joffrey uttered these rather unremarkable last words after being poisoned on his wedding day. Joffrey was killed by a potion called 'The Strangler,' which causes the throat to immediately swell shut.");
    // let EXTRA    = new QuestionGenerator("American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:", "Lord of the Rings", "Highlander", "The Chronicles of Narnia", "The Legend of Zelda", "The Chronicles of Narnia", "Dinklage played Trumpkin in the 2008 film \"The Chronicles of Narnia: Prince Caspian.\" He was not only the first person cast for the \"Game of Thrones\" series, but also the only person author George R.R. Martin wanted to play Tyrion.");
    // let EXTRA    = new QuestionGenerator("The name of King Tommen's favorite cat is:", "Battle Pus", "Little Lion", "Ser Pounce", "Prince Fuzzy", "In Season 4, Ser Pounce is introduced. Its appearance caused something of a stir on the Internet, with fans demanding that Ser Pounce be featured in future episodes. According to one writer, that likely won't happen. \"I will say that cat was a nightmare to work with.\"");

    let triviaArr                    = [numOne, numTwo, numThree, numFour, numFive, numSix, numSeven, numEight, numNine, numTen, numEleven, numTwelve];
    let correctTally                 = 0;
    let questionsAnsweredCorrectly   = [];
    let incorrectTally               = 0;
    let questionsAnsweredIncorrectly = [];
    let buttonPrompt                 = "";
    let questionTimerRunning = false;
    let moreInfoTimerRunning = false;
    let intervalIdOne;
    let intervalIdTwo;
    let questionNum = 0;

    //TIMER TO TRIGGER NEW PAGES WITHOUT USER INPUT: (THO USER ABLE TO INFLUENCE EVENTS WITH MOUSE CLICK)
    let timer = {
        questionTimer: 30,
        moreInfoTimer: 10,

        reset: function () {
            timer.questionTimer = 30;
            timer.moreInfoTimer = 15;
        },

        clearTimerDisplay: function () {
            $('#time-remaining').empty();
        },

        startQuestionTimer: function () {
            if (!questionTimerRunning) {
                intervalIdOne = setInterval(timer.questionTimerCountdown, 1000);
                questionTimerRunning = true;
            }
        },

        startMoreInfoTimer: function () {
            if (!moreInfoTimerRunning) {
                intervalIdTwo = setInterval(timer.moreInfoTimerCountdown, 1000);
                moreInfoTimerRunning = true;
            }
        },

        questionTimerCountdown: function () {
            if (!(timer.questionTimer <= 0)) {
                timer.questionTimer--;
                let timeLeft = timer.questionTimer;
                console.log(timeLeft);
                $('#time-remaining').text(`${timeLeft}`);
            } else {
                timer.stopQuestionTimer();
                renderMoreInfoPage(triviaArr, questionNum);
                (timer.startMoreInfoTimer());

            }
        },

        stopQuestionTimer: function () {
            clearInterval(intervalIdOne);
            questionTimerRunning = false;
        },

        moreInfoTimerCountdown: function () {
            if (!(timer.moreInfoTimer <= 0)) {
                timer.moreInfoTimer--;
                let timeLeft = timer.moreInfoTimer;
                console.log(timeLeft);
                $('#time-remaining').text(`${timeLeft}`);
            } else {
                timer.stopMoreInfoTimer();
                timer.triggerNext();
            }
        },

        stopMoreInfoTimer: function () {
            clearInterval(intervalIdTwo);
            moreInfoTimerRunning = false;
        },

        triggerNext: function () {
            $('.next-btn-row').empty();
            if (questionNum !== triviaArr.length - 1) {
                timer.clearTimerDisplay();
                $('#time-remaining').text('30')
                timer.reset();
                timer.startQuestionTimer();
                questionNum++;
                renderQuestionPage(triviaArr, questionNum);
            } else {
                renderEndGame();
            }
        }
    }

    function renderQuestionPage(triviaArr, questionNum) {

        $('.timer-row').removeClass('hidden');

        $('.question-row')
            .html(`
            <div class="col-sm-12 col-lg-8"><h4>${triviaArr[questionNum].ask()}</h4></div>
            `)

        $('.answer-row')
            .html(`
            <div class="col-sm-12">
                <ul>
                    <li class="clickToGuess">${triviaArr[questionNum].optionA}</li>
                    <li class="clickToGuess">${triviaArr[questionNum].optionB}</li>
                    <li class="clickToGuess">${triviaArr[questionNum].optionC}</li>
                    <li class="clickToGuess">${triviaArr[questionNum].optionD}</li>
                <ul>
            </div>
            `)

        $('.clickToGuess').on('click', function () {
            //IF 'THIS' ITEM CLICKED EQUALS CORRECT ANSWER:
            if ($(this).text() === triviaArr[questionNum].Answer) {
                correctTally++;
                //ADD CORRECTLY ANSWERED QUESTION TO ARRAY FOR DISPLAY ON ENDGAME():
                let answeredCorrect = triviaArr[questionNum].Question
                questionsAnsweredCorrectly.push(answeredCorrect);
                console.log(questionsAnsweredCorrectly);
                //ADJUST TIMERS --> renderMoreInfo()
                timer.stopQuestionTimer();
                timer.reset();
                timer.startMoreInfoTimer();
                renderMoreInfoPage(triviaArr, questionNum);
                // return;
            } else {
                incorrectTally++;
                //ADD CORRECTLY ANSWERED QUESTION TO ARRAY FOR DISPLAY ON ENDGAME():
                let answeredIncorrect = triviaArr[questionNum].Question
                questionsAnsweredIncorrectly.push(answeredIncorrect);
                console.log(questionsAnsweredIncorrectly);
                //ADJUST TIMERS --> renderMoreInfo()
                timer.stopQuestionTimer();
                timer.reset();
                timer.startMoreInfoTimer();
                renderMoreInfoPage(triviaArr, questionNum);
            }
        })
    }

    function renderMoreInfoPage(triviaArr, questionNum) {

        $('.timer-row').toggleClass('hidden');

        $('.more-info').html(`
        <div class="col-sm-12"><h4>MORE INFO:</h4></div>
        `)
        $('.more-info-row').html(`
        <div class="col-lg-8 col-sm-12"><h6>${triviaArr[questionNum].moreInfo}</h6></div>
        `)

        //CREATE A NEW ROW AND SINGLE COLUMN FOR "NEXT QUESTION" BUTTON:
        let $buttonRow = $('<div>').addClass('row justify-content-center next-btn-row');
        let $buttonCol = $('<div>').addClass('col-3').css({ "display": "flex" });
        //CHANGE NEXT BUTTON TEXT IF USER ON LAST QUESTION:
        (!(questionNum === triviaArr.length - 1)) ? buttonPrompt = "NEXT QUESTION" : buttonPrompt = "FINISH";
        let $nextBtn = $('<button>').attr('type', 'button').addClass('btn btn-primary next-btn').text(`${buttonPrompt}`).css('flex', '1');

        //BUTTON CLICK TRIGGERS NEXT QUESTION PAGE:
        $nextBtn.on('click', function () {
            timer.stopMoreInfoTimer();
            timer.reset();
            timer.triggerNext();
            $buttonRow.empty();
        });

        //APPEND, APPEND, APPEND:
        $buttonCol.html($nextBtn);
        $buttonRow.html($buttonCol);
        $('.more-info-row').after($buttonRow);

    }

    function renderEndGame() {

        $('.title').html(`
        <h1>FINISH!</h1>
        `)

        $('.timer-row').addClass('hidden');

        $('.more-info').empty();
        $('.end-game-score').html(`
        <div class="col-5 border border-success"><h4>You answered ${correctTally} Correctly</h4></div>
        <div class="col-5 border border-danger"><h4>You answered ${incorrectTally} Incorrectly</h4></div>
        `);

        let $endGameResultsContainer = $('<div>').addClass('row justify-content-center end-game-results');

        let $answeredCorrectBox = $('<div>').addClass('col-5 border border-success correct');
        let $answeredCorrectList = $('<ul>'); 

        let $answeredIncorrectBox = $('<div>').addClass('col-5 border border-danger incorrect');
        let $answeredIncorrectList = $('<ul>') 

        //APPEND CORRECTLY ANSWERED QUESTIONS:
        questionsAnsweredCorrectly.forEach(function (item) {
            $answeredCorrectList.append(`<li class="results-question-list">${item}</li>`) //CAN ADD .CSS HERE TO STYLE BULLET POINTS
        })

        //APPEND INCORRECTLY ANSWERED QUESTIONS:
        questionsAnsweredIncorrectly.forEach(function (item) {
            $answeredIncorrectList.append(`<li class="results-question-list">${item}</li>`) //CAN ADD .CSS HERE TO STYLE BULLET POINTS
        })

        $answeredCorrectBox.append($answeredCorrectList);
        $answeredIncorrectBox.append($answeredIncorrectList);

        $endGameResultsContainer.append($answeredCorrectBox);
        $endGameResultsContainer.append($answeredIncorrectBox);

        $('.end-game-score').after($endGameResultsContainer);

        $('.more-info-row').empty();
        let $restartBtnCol = $('<div>').addClass('col-2');
        let $restartBtn = $('<button>').attr('type', 'button').addClass('btn btn-primary restart-btn').text('START OVER');

        $restartBtn.on('click', function () {
            questionNum = 0;
            questionsAnsweredCorrectly = [];
            questionsAnsweredIncorrectly = [];
            correctTally = 0;
            incorrectTally = 0;
            timer.reset();
            timer.startQuestionTimer();
            $('.title').html('<h1>GAME OF THRONES <br> TRIVIA!</h1> <hr>');
            $('.end-game-results').remove();
            $('#time-remaining').text('30');
            renderQuestionPage(triviaArr, questionNum);
        })

        $restartBtnCol.append($restartBtn);
        $('.restart-btn-row').html($restartBtnCol);

    }

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

    function startGame() {
        correctTally = 0;
        incorrectTally = 0;
        questionTimerRunning = false;
        moreInfoTimerRunning = false;
        intervalIdOne;
        intervalIdTwo;
        questionNum = 0;
        renderQuestionPage(triviaArr, questionNum);
        timer.startQuestionTimer();
    }

    startGame();

}); /*end document.ready*/