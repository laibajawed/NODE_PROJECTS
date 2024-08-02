import inquirer from "inquirer"; // Importing the inquirer module for interactive prompts
// Class representing a player
class Player {
    constructor(name) {
        this.fuel = 100; // Player's fuel initialized to 100
        this.name = name; // Setting the player's name
    }
    // Method to decrease the player's fuel by 25
    fuelDecrease() {
        let fuel = this.fuel - 25; // Calculate the new fuel value by subtracting 25 from the current fuel value
        this.fuel = fuel; // Update the instance's fuel property with the new value
    }
    // Method to reset the player's fuel to 100
    fuelIncrease() {
        this.fuel = 100; // Set fuel to 100
    }
}
// Class representing an opponent
class Opponent {
    constructor(name) {
        this.fuel = 100; // Opponent's fuel initialized to 100
        this.name = name; // Setting the opponent's name
    }
    // Method to decrease the opponent's fuel by 25
    fuelDecrease() {
        let fuel = this.fuel - 25; // Calculate the new fuel value by subtracting 25 from the current fuel value
        this.fuel = fuel; // Update the instance's fuel property with the new value
    }
}
// Prompt the player to enter their name
let player = await inquirer.prompt([
    {
        type: "input",
        name: "playerName",
        message: "Enter your name:"
    }
]);
// Prompt the player to select their opponent
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
// Create a new player instance with the provided name
let p1 = new Player(player.playerName); // Correctly set player name
// Create a new opponent instance with the selected opponent's name
let o1 = new Opponent(opponent.select); // Correctly set opponent name
// Game logic loop
do {
    // Skeleton opponent
    if (opponent.select === "Skeleton") {
        // Prompt the player to choose an action
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "Choose your action",
                choices: ["Attack", "Run away", "Drink Potion"]
            }
        ]);
        if (ask.action === "Attack") { // If the player chooses to attack
            let num = Math.floor(Math.random() * 2); // Randomly decide whether the player or opponent loses fuel
            if (num > 0) { // Player loses fuel
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) { // Check if the player is out of fuel
                    console.log("You lose, better luck next time");
                    process.exit(); // Exit the game
                }
            }
            else { // Opponent loses fuel
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) { // Check if the opponent is out of fuel
                    console.log("You Win!");
                    process.exit(); // Exit the game
                }
            }
        }
        else if (ask.action === "Drink Potion") { // If the player chooses to drink a potion
            p1.fuelIncrease();
            console.log(`You Drank Potion. Your Fuel Is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
        }
        else if (ask.action === "Run away") { // If the player chooses to run away
            console.log("You Lost, Better luck next time");
            process.exit(); // Exit the game
        }
    }
    // Alien opponent
    if (opponent.select === "Alien") {
        // Prompt the player to choose an action
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "Choose your action",
                choices: ["Attack", "Run away", "Drink Potion"]
            }
        ]);
        if (ask.action === "Attack") { // If the player chooses to attack
            let num = Math.floor(Math.random() * 2); // Randomly decide whether the player or opponent loses fuel
            if (num > 0) { // Player loses fuel
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) { // Check if the player is out of fuel
                    console.log("You lose, better luck next time");
                    process.exit(); // Exit the game
                }
            }
            else { // Opponent loses fuel
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) { // Check if the opponent is out of fuel
                    console.log("You Win!");
                    process.exit(); // Exit the game
                }
            }
        }
        else if (ask.action === "Drink Potion") { // If the player chooses to drink a potion
            p1.fuelIncrease();
            console.log(`You Drank Potion. Your Fuel Is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
        }
        else if (ask.action === "Run away") { // If the player chooses to run away
            console.log("You Lost, Better luck next time");
            process.exit(); // Exit the game
        }
    }
    // Zombie opponent
    if (opponent.select === "Zombie") {
        // Prompt the player to choose an action
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "Choose your action",
                choices: ["Attack", "Run away", "Drink Potion"]
            }
        ]);
        if (ask.action === "Attack") { // If the player chooses to attack
            let num = Math.floor(Math.random() * 2); // Randomly decide whether the player or opponent loses fuel
            if (num > 0) { // Player loses fuel
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) { // Check if the player is out of fuel
                    console.log("You lose, better luck next time");
                    process.exit(); // Exit the game
                }
            }
            else { // Opponent loses fuel
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) { // Check if the opponent is out of fuel
                    console.log("You Win!");
                    process.exit(); // Exit the game
                }
            }
        }
        else if (ask.action === "Drink Potion") { // If the player chooses to drink a potion
            p1.fuelIncrease();
            console.log(`You Drank Potion. Your Fuel Is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
        }
        else if (ask.action === "Run away") { // If the player chooses to run away
            console.log("You Lost, Better luck next time");
            process.exit(); // Exit the game
        }
    }
} while (true); // Loop to continue the game
