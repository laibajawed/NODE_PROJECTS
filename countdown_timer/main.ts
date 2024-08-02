// Import required libraries
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

// Prompt user for input and validate it
const res = await inquirer.prompt({
    name: "userInput",
    type: "input",
    message: "Please enter the amount of seconds",
    validate: (input) => {
      // Check if input is a valid number
      if (isNaN(input)) {
        return "Please enter a valid number";
      } 
      // Check if input is more than 60 seconds
      else if (input > 60) {
        return "Time cannot be more than 60 seconds";
      } 
      else {
        return true;
      }
    }
});

// Convert user input to a number
let input = Number(res.userInput);

// Function to start the timer
function startTime(val: number) {
    // Calculate the future time when the timer should expire
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);

    // Set up an interval to update the timer every second
    setInterval((() => {
        // Get the current time
        const currentTime = new Date();

        // Calculate the time difference between the current time and the future time
        const timeDiff = differenceInSeconds(intervalTime, currentTime);

        // Check if the timer has expired
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit(0); // Exit the process
        }

        // Calculate the remaining minutes and seconds
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);

        // Print the remaining time
        console.log(`Time left: ${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}s`);

    }), 1000); // Update every second
}

// Start the timer with the user-provided input
startTime(input);