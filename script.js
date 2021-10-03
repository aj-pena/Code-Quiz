// Select elements
let timer = document.getElementById('timer');
let title = document.getElementById('title');
let intro = document.getElementById('intro');
let quiz = document.getElementById('card-quiz');
let startBtn = document.getElementById('start');
let results = document.getElementById('results');
let secondsRemaining = 10;

// Start quiz
function startQuiz() {
    // hides start button
    startBtn.style.visibility = 'hidden';   
    // initializes timer
    timer.innerText = secondsRemaining + ' seconds remaining';
    setTime();
    // writes first question
    renderQuestions();

}
// Timer function
function setTime(){
    
    let counter = setInterval(function(){
        secondsRemaining --;
        timer.innerText = secondsRemaining + ' seconds remaining';
        if(secondsRemaining == 0){           
            clearInterval(counter);
            saveScore();
        }
    },1000);
    
}

// Rendering questions to the card-quiz div
function renderQuestions(){
    let index = 0;
    title.innerText = questions[index].question;
    
}

// End of quiz high scores storage
function saveScore(){
    // Display of message
    title.innerText = 'All Done!';
    intro.innerText = 'Click save for saving your score or clear all to clear all score history';
    timer.innerText = '';

    // Create and Append input field to save name
   let input = document.createElement('input');
   input.setAttribute('placeholder','Enter Name here');
   input.setAttribute('type','Text');
    quiz.append(input);

    // Create and Append 'Save' and 'Clear All' buttons


}


// List of questions
let questions = [
    {
        question : 'JavaScript is used for', 
        choiceA : 'Creating the text content of the webpage',
        choiceB : 'Styling the conent of the webpage',
        choiceC : 'Powering the functionality of the webpage and making it interactive',
        correct: 'C',
    },
    {
        question : 'What does the DOM stands for?', 
        choiceA : 'Deviously Orchestrated Machine',
        choiceB : 'Document Object Model',
        choiceC : 'Drive Orto Model',
        correct: 'B',
    },
    {
        question : 'What does the -Document- object refer to', 
        choiceA : 'The webpage HTML Focument',
        choiceB : 'The README text document associated with the repository',
        choiceC : 'The Javascript code document',
        correct: 'A',
    },
    {
        question : 'With JavaScript, it is possible to', 
        choiceA : 'Create dynamic documents that change depending on user and/or server input',
        choiceB : 'Access APIs and server data to power the web application capabilites',
        choiceC : 'Both A and B',
        correct: 'C',
    }
]


// Counter

// Results

// Answer is correct

// Answer is wrong

// Event listener for Start Button
startBtn.addEventListener('click' , startQuiz);