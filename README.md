# <Code Quiz>

## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

This program will generate an interactive quiz with multiple choices that will keep track of high scores.
This program will allow the user to keep his/her coding knowledge greased and compare it to others via scores.
It will be powered by Jquery and bootstrap.
WIth this project my aim is to learn:
    - Bootstrap
    - Jquery
    - Forms
    - Prompts, Confirm and Alerts
    - Local Storage
    - Creating and renderign a timer

By default, I created a style.css file when I initialized the repository. However, this might not be needed as I will be using bootstrap for styling purposes. I don´t anticipate using custom styling.
As such, I might delete the style.css file in a future commit.


## GitHub Repo
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Live Webpage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    ```md
    ![alt text](assets/images/screenshot.png)
    ```
## Workflow
FIRST, I will complete the index.html file.
SECOND, I will work on the JavaScript side of things, powered by JQuery.
THIRD, I will power the styling with bootstrap.

## Challenges

## Lessons Learned

## Tools List (For reference)
Possible methods I will use:

<!-- Accessing HTML -->

document.querySelector()
document.querySelectorAll()
variableOrElement.textContent = value;
variableOrObject.setAttribute('nameOf', value);
document.getElementByClass('className');
document.getElementById('idName');
variable = document.createElement();
document.body.appendChild(variableOrObject);

<!-- Local Storage -->

localStorage.getItem('nameOf');
localStorage.setItem('nameOf');

<!-- Event -->

event.preventDefault)();
event.stopPropagation();
event.currentTarget.setAttribute();

<!-- Attributes -->

object.setAttribute('style','key1: value1; key2: value2;');
array[numberOrIndex].setAttribute();

<!-- Prompt / Confirm / Alert -->

prompt();
confirm();
alert('String' or value);

<!-- Interval -->

variable setInterval();
clearInterval(intervalName);

<!-- JSON -->

JSON.parse();
JSON.stringify();

<!-- Example from web -->
check https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript/blob/master/quiz.js
