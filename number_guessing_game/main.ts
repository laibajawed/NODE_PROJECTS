#!/usr/bin/env node

// Import the inquirer library for user input
import inquirer from "inquirer";

// Display a welcome message
console.log("Welcome to Laiba's - CLI number guessing game");

// Generate a random number between 1 and 6
const randomNumber = Math.floor(Math.random() * 6 + 1);

// Prompt the user to guess a number between 1 and 6
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6"
    },
]);

// Check if the user's guess matches the random number
if (answers.userGuessNumber === randomNumber) {
    // Display a congratulatory message if the guess is correct
    console.log("Congratulations! You guessed the correct number.");
} else {
    // Display a message if the guess is incorrect
    console.log("Sorry, you guessed the incorrect number.");
}