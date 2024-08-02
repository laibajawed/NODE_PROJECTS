import inquirer from "inquirer"; // For CLI prompts
import chalk from "chalk"; // For styled terminal output
// Initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;
// Display welcome message
console.log(chalk.blue("\n \t Welcome to Laiba's - ATM machine\n \t"));
// Prompt user to enter pin code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
// Check if entered pin is correct
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin is correct, Login successfully!\n"));
    // Prompt user to select an operation
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw amount", "Check balance"]
        }
    ]);
    // Perform selected operation
    if (operationAns.operation === "Withdraw amount") {
        // Prompt user to select withdraw method
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select withdraw method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        // Withdraw using fast cash
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select amount",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            // Check if sufficient balance exists
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash; // Deduct the fast cash amount from balance
                console.log(`${fastCashAns.fastCash} withdrawn successfully`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
        // Withdraw using entered amount
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter amount to withdraw:"
                }
            ]);
            // Check if sufficient balance exists
            if (amountAnswer.amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= amountAnswer.amount; // Deduct the entered amount from balance
                console.log(`${amountAnswer.amount} withdrawn successfully`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
    }
    // Check account balance
    else if (operationAns.operation === "Check balance") {
        console.log(`Your account balance is: ${myBalance}`);
    }
}
else {
    // Display error message if pin is incorrect
    console.log(chalk.red("Pin is incorrect, Try again!"));
}
