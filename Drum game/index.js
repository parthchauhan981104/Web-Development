var noofdrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<noofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playAud(this.innerHTML);
    buttonAnimation(this.innerHTML); }
    );
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function (event) {
      playAud(event.key);
      buttonAnimation(event.key); }
    );

}


function playAud(d) {
  switch (d) {
    case "w":
      var aud = new Audio("sounds\\crash.mp3");
      aud.play();
      break;
    case "a":
      var aud = new Audio("sounds\\kick-bass.mp3");
      aud.play();
      break;
    case "s":
      var aud = new Audio("sounds\\snare.mp3");
      aud.play();
      break;
    case "d":
      var aud = new Audio("sounds\\tom-1.mp3");
      aud.play();
      break;
    case "j":
      var aud = new Audio("sounds\\tom-2.mp3");
      aud.play();
      break;
    case "k":
      var aud = new Audio("sounds\\tom-3.mp3");
      aud.play();
      break;
    case "l":
      var aud = new Audio("sounds\\tom-4.mp3");
      aud.play();
      break;
    default:
      console.log(d);


  }

}

function buttonAnimation(d) {
  pressedButton = document.querySelector("."+d);
  pressedButton.classList.add("pressed");
  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 100);

}
