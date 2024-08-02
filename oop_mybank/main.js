import inquirer from "inquirer";
// Bank account class
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // Debit money
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining balance: $${this.balance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    // Credit money
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; // 1$ fee charged if more than $100 is deposited
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. Remaining balance: $${this.balance}`);
    }
    // Check current balance
    checkBalance() {
        console.log(`Current balance: $${this.balance}`);
    }
}
// Customer class
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
// Create bank accounts
const accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000),
];
// Create customers
const customers = [
    new Customer("laiba", "jawed", "female", 20, 3162223334, accounts[0]),
    new Customer("Rayan", "amjad", "Female", 25, 3162223334, accounts[1]),
    new Customer("Zaran", "rayan", "Male", 20, 3162223334, accounts[2]),
];
// Function to interact with bank account
async function service() {
    // Infinite loop to continuously prompt the user for their account number
    do {
        const accountNumberInput = await inquirer.prompt({
            type: "number",
            name: "accountNumber",
            message: "Enter your account number:",
        });
        // Find the customer with the entered account number
        const customer = customers.find((customer) => customer.account.accountNumber === accountNumberInput.accountNumber);
        // If a customer is found, display a welcome message and prompt for a service
        if (customer) {
            console.log(`Welcome, ${customer.firstName} ${customer.lastName}!\n`);
            const ans = await inquirer.prompt([
                {
                    type: "list",
                    name: "select",
                    message: "Choose your service:",
                    choices: ["Withdraw", "Deposit", "Check Balance", "Exit"],
                },
            ]);
            // Perform the selected service
            switch (ans.select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        type: "number",
                        name: "amount",
                        message: "Enter the amount to deposit:",
                    });
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        type: "number",
                        name: "amount",
                        message: "Enter the amount to withdraw:",
                    });
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    // Exit the bank program
                    console.log("Exiting bank program...");
                    console.log("\n Thank you for using our bank services. Have a great day!");
                    // Do not return any additional code beyond the immediate scope of the code block
                    return;
            }
        }
        else {
            // If no customer is found, display an error message
            console.log("Invalid account number. Please try again.");
        }
    } while (true); // Continue the loop indefinitely
}
// Call the service function to start the bank program
service();
