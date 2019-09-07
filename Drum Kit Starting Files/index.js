//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i< numberOfDrumButtons; i++) {
drumButtons[i].addEventListener("click", function() {

//If Button was pressed =>

var buttonInnerHTML =  this.innerHTML; // check this
makeSound(buttonInnerHTML); // send that to make sound
buttonAnimation(buttonInnerHTML);
});
}

//Detectiong Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key){

switch (key){

case "a":

var mus = "sounds/tom-1.mp3";

break;

case "s":

var mus = "sounds/tom-2.mp3";

break;

case "d":

var mus = "sounds/tom-3.mp3";

break;

case "f":

var mus = "sounds/tom-4.mp3"

break;

case "j":

var mus = "sounds/snare.mp3";

break;

case "k":

var mus = "sounds/kick-bass.mp3";

break;

case "l":

var mus = "sounds/crash.mp3";

break;

default: console.log(key);}

var audio = new Audio(mus);

audio.play();}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
