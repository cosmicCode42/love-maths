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
document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements
    let buttons = document.getElementsByTagName("button");
    
    //... and add event listeners to them
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

// Going to use Math.random() to generate numbers between 1 and 25. Let's make an attempt at code that can work...

// let operandOne = Math.ceil(Math.random() * 25);
// let operandTwo = Math.ceil(Math.random() * 25);

/* This code creates two random numbers between 1 and 25! They're assigned to the operandOne and operandTwo variables.
   It's different than the model given - Amanda instead uses Math.floor(Math.random() * 25) + 1, which is about the
   same, I think.
*/

/**
 * The main game 'loop', called when the script is first loaded and
 * after the user's answer has been processed
 */
function runGame() {
    // Uses my version of the random number generation between 1 and 25.
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);
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