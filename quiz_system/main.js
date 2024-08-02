import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "What is the capital of Pakistan?",
        choices: ["Islamabad", "Karachi", "Lahore", "Quetta"],
    },
    {
        name: "question2",
        type: "list",
        message: "Which of the following characters is commanly allowed in variable declaration in TypeScript? ",
        choices: ["$", "@", "#", "&"],
    },
    {
        name: "question3",
        type: "list",
        message: "Which operator is commonly used for sring concatenation in TypeScript?",
        choices: ["+", "-", "*", "/"],
    },
    {
        name: "question4",
        type: "list",
        message: " In Typescript, which symbol ic commanly used to terminate a statement?",
        choices: [":", ".", ",", ";"],
    },
    {
        name: "question5",
        type: "list",
        message: " Which of the following is the correct file extension for TypeScript files?",
        choices: [".ts", ".tsc", ".js", ".tsxl"],
    },
]);
let score = 0;
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
console.log(`Your score is ${score}`);
