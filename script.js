// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var cityName = prompt("Enter the name of your city:");
if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
 } else
 { alert("Welcome!");
    }

//Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// Prompt the user to enter their gender
var gender = prompt("Please enter your gender (male/female):");
gender = gender.toLowerCase();

if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Invalid input. Please enter 'male' or 'female'.");
}

//write a program to take input color of road traffic signaal from the user & show the message according to this table:
var color = prompt("Enter a color of traffic signal");
if (color.toUpperCase() == "red".toUpperCase())
{
    alert("message is :" + "stop your vehicals")
}
else if (color.toUpperCase() == "yellow".toUpperCase()) 
{ alert("message is :"+" get ready to move your vehicles.") } 
else if (color.toUpperCase() == "green".toUpperCase())
 { alert("message is :"+" now you can move your vehicles .") }

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = (prompt("Guess the secret number (between 1 and 10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, wrong guess. The correct answer was " + secretNumber);
}

// Write a program that checks whether the given input is an even number or an odd number.**

var input = prompt("Enter a number:");

var number = +input;

if (!isNaN(number)) {
    
    if (number % 2 === 0) {
        alert(number + " is an even number.");
    } else {
        alert(number + " is an odd number.");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}

//  Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:**
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");


var result;


if (!isNaN(firstNumber) && !isNaN(secondNumber)) {

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber; break;
        case "-":
            result = firstNumber - secondNumber; break;
        case "*":
            result = firstNumber * secondNumber; break;
        case "/":
            result = secondNumber !== 0 ? firstNumber / secondNumber : "Error: Division by zero"; break;
        case "%":
            result = secondNumber !== 0 ? firstNumber % secondNumber : "Error: Modulus by zero"; break;
        default:
            result = "Error: Invalid operation"; break;
    }
    alert(result);
} else {
    alert("Invalid input. Please enter valid numbers.");
}