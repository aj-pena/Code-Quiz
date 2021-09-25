This program will generate an interactive quiz with multiple choices that will keep track of high scores.
It will be powered by Jquery and bootstrap.
By default, I created a style.css file when I initialized the repository. However, this might not be needed as I will be using bootstrap for styling purposes. I don´t anticipate using custom styling.
As such, I might delete the style.css file in a future commit.
FIRST, I will complete the index.html file.
SECOND, I will work on the JavaScript side of things, powered by JQuery.
THIRD, I will power the styling with bootstrap.

Possible methods I will use:

Accessing HTML

document.querySelector()
document.querySelectorAll()
variableOrElement.textContent = value;
variableOrObject.setAttribute('nameOf', value);
document.getElementByClass('className');
document.getElementById('idName');
variable = document.createElement();
document.body.appendChild(variableOrObject);

Local Storage

localStorage.getItem('nameOf');
localStorage.setItem('nameOf');

Event

event.preventDefault)();
event.stopPropagation();
event.currentTarget.setAttribute();

Attributes

object.setAttribute('style','key1: value1; key2: value2;');
array[numberOrIndex].setAttribute();

Prompt / Confirm / Alert

prompt();
confirm();
alert('String' or value);

Interval

variable setInterval();
clearInterval(intervalName);

JSON

JSON.parse();
JSON.stringify();

