import inquirer from "inquirer";
import chalk from "chalk";
// display a colourful welcome message
console.log(chalk.bold.cyanBright("\n\t\tLaiba's - Word Counter \n"));
// prompt the user to enter a sentence
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence ",
    }
]);
// trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// analysis of user input sentence
console.log(chalk.bold("- Sentence words:"));
// print the array of words
console.log(words);
// print the word count of the sentence
console.log(chalk.bold(`\n - Word count: ${chalk.bold.redBright(words.length)}`));
