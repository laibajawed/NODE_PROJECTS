#!usr/bin/env node
// Import the inquirer library for user input
import inquirer from "inquirer";

// Define the quiz questions and their choices
const quiz: {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
} = await inquirer.prompt([
  {
    name: "question1",
    type: "list",
    message: "What is the capital of Pakistan?",
    choices: ["Islamabad", "Karachi", "Lahore", "Quetta"],
  },
  {
    name: "question2",
    type: "list",
    message:
      "Which of the following characters is commonly allowed in variable declaration in TypeScript? ",
    choices: ["$", "@", "#", "&"],
  },
  {
    name: "question3",
    type: "list",
    message:
      "Which operator is commonly used for string concatenation in TypeScript?",
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "question4",
    type: "list",
    message:
      "In TypeScript, which symbol is commonly used to terminate a statement?",
    choices: [":", ".", ",", ";"],
  },
  {
    name: "question5",
    type: "list",
    message:
      "Which of the following is the correct file extension for TypeScript files?",
    choices: [".ts", ".tsc", ".js", ".tsxl"],
  },
]);

// Initialize the score variable
let score: number = 0;

// Check the answers and update the score accordingly
switch (quiz.question1) {
  case "Islamabad":
    console.log("1. Correct Answer!");
    ++score;
    break;
  default:
    console.log("1. Incorrect Answer!");
}
switch (quiz.question2) {
  case "$":
    console.log("2. Correct Answer!");
    ++score;
    break;
  default:
    console.log("2. Incorrect Answer!");
}
switch (quiz.question3) {
  case "+":
    console.log("3. Correct Answer!");
    ++score;
    break;
  default:
    console.log("3. Incorrect Answer!");
}
switch (quiz.question4) {
  case ";":
    console.log("4. Correct Answer!");
    ++score;
    break;
  default:
    console.log("4. Incorrect Answer!");
}
switch (quiz.question5) {
  case ".ts":
    console.log("5. Correct Answer!");
    ++score;
    break;
  default:
    console.log("5. Incorrect Answer!");
}

// Display the final score
console.log(`Your score is ${score}`);