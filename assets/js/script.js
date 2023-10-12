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
                runGame(gameType);
            }
        })
    }

    // Set the initial game type to 'addition'.
    runGame("addition");

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
function runGame(gameType) {
    
    // Uses my version of the random number generation between 1 and 25.
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);

    // checks game type - my attempt! Currently commented so as not to wreck stuff. Seems to work great though!
    // switch (gameType) {
    //     case 'addition':
    //         displayAdditionQuestion(num1, num2);
    //         break;
    //     case 'subtract':
    //         displaySubtractQuestion(num1, num2);
    //         break;
    //     case 'multiply':
    //         displayMultiplyQuestion(num1, num2);
    //         break;
    //     case 'division':
    //         displayDivisionQuestion(num1, num2);
    //         break;
    //     default:
    //         alert(`Unknown game type: ${gameType}.`)
    //         throw `Unknown game type: ${gameType}. Aborting!`
    // }

    // original code at this point in the lesson:
    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}.`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    // Question setup - gets the two numbers and the operator
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    // Question setup - gets the two numbers and the operator
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    // Question setup - gets the two numbers and the operator
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

// This is the one I did.
function displayDivisionQuestion(operand1, operand2) {
    // Question setup - gets the two numbers and the operator
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}