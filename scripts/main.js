let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'https://freesvg.org/img/Krokodil-coloured.png') {
    myImage.setAttribute('src','https://freesvg.org/img/Krokodil-lineart.png');
  } else {
    myImage.setAttribute('src','https://freesvg.org/img/Krokodil-coloured.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Wellcome to Croco Verde, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Wellcome to Croco Verde, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}