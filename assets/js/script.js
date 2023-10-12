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
                checkAnswer(); // Clicking submit checks your answer against the correct one.
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType); // Clicking a button type sets the game to that type.
            }
        })
    }
    
    // Lets you press enter to answer the question
    document.getElementById('answer-box').addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

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
 * after the user's answer has been processed.
 */
function runGame(gameType) {
    
    // Reset answer box and focus on it automatically
    document.getElementById('answer-box').value = null;
    document.getElementById('answer-box').focus();
    
    // Uses my version of the random number generation between 1 and 25.
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);

    // checks game type - my attempt! Seems to work great!
    switch (gameType) {
        case 'addition':
            displayAdditionQuestion(num1, num2);
            break;
        case 'subtract':
            displaySubtractQuestion(num1, num2);
            break;
        case 'multiply':
            displayMultiplyQuestion(num1, num2);
            break;
        case 'division':
            displayDivisionQuestion(num1, num2);
            break;
        default:
            alert(`Unknown game type: ${gameType}.`)
            throw `Unknown game type: ${gameType}. Aborting!`
    }

    // Original code at the point in the lesson that I coded my attempt:
    // if (gameType === 'addition') {
    //     displayAdditionQuestion(num1, num2);
    // } else {
    //     alert(`Unknown game type: ${gameType}.`)
    //     throw `Unknown game type: ${gameType}. Aborting!`
    // }

}

/**
 * Checks the user's answer against the first element in
 * the returned calculateCorrectAnswer array.
 */
function checkAnswer() {
    
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("That's correct! Well done.");
        incrementScore();
    } else {
        alert(`${userAnswer} is incorrect. The correct answer is ${calculatedAnswer[0]}.`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the two numbers) and the operator (plus, minus, etc) from
 * the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // Gets the values from the DOM. parseInt treats the result as an integer.
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    //Find game type
    // My attempt. All seems to work!
    switch (operator) {
        case "+":
            return [operand1 + operand2, "addition"];
        case "-":
            return [operand1 - operand2, "subtract"];
        case "x":
            return [operand1 * operand2, "multiply"];
        case "/":
            return [operand1 / operand2, "division"];   
        default:
            alert(`Unimplemented operator: ${operator}.`);
            throw `Unimplemented operator: ${operator}. Aborting!`;
    }

    //Original code when I made my attempt:
    // if (operator === "+") {
    //     return [operand1 + operand2, "addition"];
    // } else {
    //     alert(`Unimplemented operator: ${operator}.`);
    //     throw `Unimplemented operator: ${operator}. Aborting!`
    // }
}

/**
 * Adds to the correct answers count.
 */
function incrementScore() {
    document.getElementById('score').innerText++;
}

/**
 * Adds to the incorrect answers count.
 */
function incrementWrongAnswer() {
    document.getElementById('incorrect').innerText++;
}

/**
 * Generates an addition question.
 * Operator is the + sign.
 * @param {*} operand1 the first number.
 * @param {*} operand2 the second number.
 */
function displayAdditionQuestion(operand1, operand2) {
    // Question setup - gets the two numbers and the operator
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

/**
 * Generates a subtraction question.
 * Operator is the - sign.
 * @param {*} operand1 the first number.
 * @param {*} operand2 the second number.
 */
function displaySubtractQuestion(operand1, operand2) {
    /* Question setup - gets the two numbers and the operator.
       Slightly different - we don't want negative numbers as 
       our answers, so operand1 on the document has to be larger. */
    document.getElementById('operand1').textContent = Math.max(operand1, operand2);
    document.getElementById('operand2').textContent = Math.min(operand1, operand2);
    document.getElementById('operator').textContent = "-";
}

/**
 * Generates a multiplication question.
 * Operator is the x sign.
 * @param {*} operand1 the first number.
 * @param {*} operand2 the second number.
 */
function displayMultiplyQuestion(operand1, operand2) {
    // Question setup - gets the two numbers and the operator
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

// This is the one I did.
/**
 * Generates a division question.
 * Operator is the / sign.
 * @param {*} operand1 the first number.
 * @param {*} operand2 the second number.
 */
function displayDivisionQuestion(operand1, operand2) {
    /* Question setup - gets the two numbers and the operator.
       Again, we want to make this easy, so divide a larger number by
       a smaller one. operand1 on the document has to be larger. */
    document.getElementById('operand1').textContent = Math.max(operand1, operand2);
    document.getElementById('operand2').textContent = Math.min(operand1, operand2);
    document.getElementById('operator').textContent = "/";
}