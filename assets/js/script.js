/*
  We need:
  - runGame(): runs the game
  - checkAnswer(): checks the answer given
  - calculateCorrectAnswer(): calculates and returns the correct answer and the game type to checkAnswer()
  - incrementScore(): increments Correct Answers if answer is correct
  - incrementWrongAnswer(): increments Incorrect Answers if answer is wrong
  - displayAdditionQuestion(): displays the addition question and changes game type
  - displaySubtractQuestion(): displays the subtraction question and changes game type
  - displayMultiplyQuestion(): displays the multiplication question and changes game type
  - displayDivisionQuestion(): displays the division question and changes game type
*/

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}!`)
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

// This is the one I did.
function displayDivisionQuestion() {

}