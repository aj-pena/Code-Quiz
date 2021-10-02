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

// Writes questions function
function questions(){}

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


// Questions array


// Counter

// Results

// Answer is correct

// Answer is wrong

// Event listener for Start Button
startBtn.addEventListener('click' , startQuiz);