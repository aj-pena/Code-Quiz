// Select elements
let timer = document.getElementById('timer');
let title = document.getElementById('title');
let intro = document.getElementById('intro');
let quiz = document.getElementById('card-quiz');
let startBtn = document.getElementById('start');
let results = document.getElementById('results');
let answer = '';
let index = 0;
let questionNumber = 0;

let secondsRemaining = 45;

// List of questions
let questions = [
    {
        question : 'JavaScript is used for:', 
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
        choiceA : 'The webpage HTML document',
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
];


// Start quiz
function startQuiz() {
    // hides start button
    startBtn.style.visibility = 'hidden';   
    // initializes timer
    timer.innerText = secondsRemaining + ' seconds remaining';
    setTime();
    // writes first question
    renderQuestions(0);

}
// Timer 
function setTime(){
    
    let counter = setInterval(function(){
        secondsRemaining --;
        timer.innerText = secondsRemaining + ' seconds remaining';
        if(secondsRemaining == 0 || questionNumber == questions.length){           
            clearInterval(counter);
            saveScore();
        }
    },1000);
       
}

// Rendering questions to the card-quiz div
function renderQuestions(){
        
    title.innerText = questions[index].question;
    intro.innerText = '';
    
    // creates paragraph elements as inline-block elements
    let pA = document.createElement('p');
    pA.style.display = 'inline-block';
    let pB = document.createElement('p');
    pB.style.display = 'inline-block';
    let pC = document.createElement('p');
    pC.style.display = 'inline-block';

    // creates buttons
    let btnA = document.createElement('button');
    btnA.innerText = 'A';
    let btnB = document.createElement('button');
    btnB.innerText = 'B';
    let btnC = document.createElement('button');
    btnC.innerText = 'C';

    // creates a line-break elements
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    // populates paragraphs
    pA.innerText = '   ' + questions[index].choiceA;
    pB.innerText = '   ' + questions[index].choiceB;
    pC.innerText = '   ' + questions[index].choiceC;

    // appends buttons, paragraphs and line-breaks to card-quiz
    quiz.appendChild(btnA);
    quiz.appendChild(pA);
    quiz.appendChild(br1);
    quiz.appendChild(btnB);
    quiz.appendChild(pB);
    quiz.appendChild(br2);
    quiz.appendChild(btnC);
    quiz.appendChild(pC);
    
    // Event listeners for Choices buttons that assign value to -Answer- variable and calls on checkAnswer()
    btnA.addEventListener('click',function(){
        answer = 'A';
        console.log(answer);
        checkAnswer();
    });
    btnB.addEventListener('click',function(){
        answer = 'B';
        console.log(answer);
        checkAnswer();
    });
    btnC.addEventListener('click',function(){
        answer = 'C';
        console.log(answer);
        checkAnswer();
    });
    
}

// Check answer
function checkAnswer(){
    // creates h3 element
    let h3Results = document.createElement('h3');
    if (answer == questions[index].correct){    
        // populates h3 element 
        h3Results.innerText = 'Answer is correct!'
               
    } else {
        // populates h3 element
        h3Results.innerText = 'Answer is wrong :(';
        secondsRemaining -= 5;
    }
    // appends h3 element to -results- div
    results.appendChild(h3Results);
    
    setTimeout(function(){
        index ++;
        questionNumber ++;
        title.innerText = '';
        quiz.innerHTML = '';
        results.innerHTML = '';
        renderQuestions();
    },1000)
    
}

// End of quiz high scores storage
function saveScore(){
    // Display of message
    title.innerText = 'All Done!';
    intro.innerText = 'Click save for saving your score or clear all to clear all score history';
    timer.innerText = '';
    quiz.innerHTML = '';

    // Create and Append input field to save name
   let input = document.createElement('input');
   input.setAttribute('placeholder','Enter Name here');
   input.setAttribute('type','Text');
    quiz.append(input);

    // Create and Append 'Save' and 'Clear All' buttons


}

// Event listener for Start Button
startBtn.addEventListener('click' , startQuiz);

