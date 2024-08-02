#!usr/bin/env node
import inquirer from "inquirer";  // Importing 'inquirer' for interactive CLI prompts
import chalk from "chalk";        // Importing 'chalk' to style the terminal output

// Displaying a welcome message in blue bold text
console.log(chalk.blue.bold("\n\t Welcome to Laiba's - Currency convertor\n"));

// Define the list of currencies and their exchange rates relative to USD
let exchangeRate: any = {
    "USD": 1,         // Base currency
    "EUR": 0.9,       // European currency
    "JYP": 113,       // Japanese yen
    "CAD": 1.3,       // Canadian dollar
    "AUD": 1.65,      // Australian dollar
    "PKR": 277.70,    // Pakistani rupee
};

// Prompt the user to select currencies to convert from and to, and enter the amount to convert
let user_answer = await inquirer.prompt([
  {
    name: "fromCurrency",       // Storing the currency to convert from
    type: "list",               // Type of input is a list
    message: "Select the currency to convert from:",  // Prompt message
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"] // Available choices
  },
  {
    name: "toCurrency",         // Storing the currency to convert to
    type: "list",               // Type of input is a list
    message: "Select the currency to convert to:",  // Prompt message
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"] // Available choices
  },
  {
    name: "amount",             // Storing the amount to convert
    type: "input",              // Type of input is text
    message: "Enter the amount to convert:" // Prompt message
  }
]);

// Perform currency conversion using the formula
let fromAmount = exchangeRate[user_answer.fromCurrency];  // Get exchange rate of the 'from' currency
let toAmount = exchangeRate[user_answer.toCurrency];       // Get exchange rate of the 'to' currency
let amount = user_answer.amount;                           // Store the amount entered by the user

// Formula for conversion
let baseAmount = amount / fromAmount;                     // Convert the amount to the base currency (USD)
let converted_amount = baseAmount * toAmount;              // Convert from the base currency to the target currency

// Display the converted amount in green text with two decimal places
console.log(`Converted amount: ${chalk.green(converted_amount.toFixed(2))}`);
