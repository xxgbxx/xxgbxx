var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hallo Welt!';



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla ist cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla ist cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}