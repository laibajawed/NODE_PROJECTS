#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your first number ",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter your second number ",
        type: "number",
        name: "secondNumber",
    },
    {
        type: "list",
        name: "operator",
        message: "Choose an operation (+, -, *, /)",
        choices: ["addition", "subtraction", "multiplication", "division",]
    },
]);
// conditional statements
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid operator");
}
