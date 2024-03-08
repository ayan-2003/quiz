const questions = [
    {
        question: "What is the national flower of Japan? ",
        answers: [
            { text: "Lavender", correct: false },
            { text: "Cherry blossom", correct: true },
            { text: "Orchid", correct: false },
            { text: "Hibiscus", correct: false },
        ]
    },
    {
        question: "Which country has the most islands in the world? ",
        answers: [
            { text: "Finland", correct: false },
            { text: "Iceland", correct: false },
            { text: "Indonesia", correct: false },
            { text: "Sweden", correct: true },
        ]
    },
    {
        question: "Name the best-selling book series of the 21st century?",
        answers: [
            { text: "Harry Potter", correct: true },
            { text: "Twilight series ", correct: false },
            { text: "The Hunger", correct: false },
            { text: "The Kite Runner", correct: false },
        ]
    },
    {
        question: "Where was the first modern Olympic Games held?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Athens", correct: true },
            { text: "Amsterdam", correct: false },
            { text: "London", correct: false },
        ]
    },
    {
        question: "Which football team is known as ‘The Red Devils’?",
        answers: [
            { text: "Bayern Munich", correct: false },
            { text: "Chelsea", correct: false },
            { text: "Liverpool", correct: false },
            { text: "Manchestar United", correct: true },
        ]
    },
    {
        question: "When was Netflix founded?",
        answers: [
            { text: "2001", correct: false },
            { text: "2015", correct: false },
            { text: "1997", correct: true },
            { text: "2009", correct: false },
        ]
    },
    {
        question: "What year was the United Nations established?",
        answers: [
            { text: "1949", correct: false },
            { text: "1952", correct: false },
            { text: "1945", correct: true },
            { text: "1965", correct: false },
        ]
    },
    {
        question: "Which country has the most islands in the world? ",
        answers: [
            { text: "Finland", correct: false },
            { text: "Iceland", correct: false },
            { text: "Indonesia", correct: false },
            { text: "Sweden", correct: true },
        ]
    },
    {
        question: "What company was originally called Cadabra?",
        answers: [
            { text: "Amazon", correct: true },
            { text: "Adobe", correct: false },
            { text: "Flipkart", correct: false },
            { text: "Cisco", correct: false},
        ]
    },
    {
        question: "What company was initially known as Blue Ribbon Sports?",
        answers: [
            { text: "Reebok", correct: false },
            { text: "Nike", correct: true },
            { text: "Puma", correct: false },
            { text: "Addidas", correct: false },
        ]
    },  
];

/*adding variables for all the three files*/
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


/*storing the question index and score*/
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

/*display the question*/
function showQuestion() {
    resetState(); //reset the previous answers
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    /*display the answers*/
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        /*adding the click functions*/
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/*defining the button clicking activity*/
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;            //score will increase
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    /*disable the rest click after single click*/
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";    //the next button will be visible
}

/*adding functions for the next button*/
function showScore() {
    resetState();           //display the score
    questionElement.innerHTML = 'You scored ' + score + ' out of ' + questions.length + '!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else{
        startQuiz();       //if there is no question it will start the quiz
    }
})

/*displaying the output*/
startQuiz();

