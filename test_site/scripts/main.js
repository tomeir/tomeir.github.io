var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/baking-time.jpg') {
      myImage.setAttribute ('src','images/alton-brown-baked-eggs.jpg');
    } else {
      myImage.setAttribute ('src','images/baking-time.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'So you wanna bake, huh ' + myName + '?';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'So you wanna bake, huh ' + storedName + '?';
}

myButton.onclick = function() {
  setUserName();
}