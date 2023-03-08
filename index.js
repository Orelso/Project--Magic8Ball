function ask() {
  // let userName = "";

  // userName ? console.log('Hello Jane') : console.log('Hello');

  userQuestion = "Will I make it?";
  console.log(userQuestion);

  randomNumber = Math.floor(Math.random() * 8);
  console.log(randomNumber);

  eightBall = "";
  let result;
  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "I'm not sure try again";
      break;
    case 3:
      eightBall = "Cannot predict right now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "The outlook is not so good";
      break;
    case 7:
      eightBall = "The signs point to yes";
    default:
      break;
  }
  console.log(eightBall);
  document.getElementById("eightBall").textContent = eightBall;
}
/* -------------------------------------------------------------------------------------------------------------------------------------------(Modal)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function showModal(message) {
  var modalContainer = document.getElementById("modal-container");
  var modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;
  modalContainer.style.display = "block";

  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
      modalContainer.style.display = "none";
    });
  }
}

window.onload = function () {
  showModal(
    "Ask the Magic 8 Ball a question outloud. It will give you your answer."
  );
};
