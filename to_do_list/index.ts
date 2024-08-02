#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"; 

let todoList: string[] = []; // Initialize an empty array to store todo list tasks
let conditions = true; // A boolean to control the main loop

console.log(
  chalk.magenta.bold("\n \t Welcome to Laiba's - Todo-List Application \n")
); // Display a welcome message in magenta bold text

// Main function to run the application
let main = async () => {
  while (conditions) { // Continue looping as long as conditions is true
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option you want to do:",
        choices: [
          "Add Task",
          "Delete task",
          "Update task",
          "View Todo-list",
          "Exit",
        ],
      }
    ]);
    
    // Based on user's choice, call the corresponding function
    if (option.choice === "Add Task") {
      await addTask();
    } else if (option.choice === "Delete task") {
      await deleteTask();
    } else if(option.choice === "Update task") {
      await updateTask();
    } else if (option.choice === "View Todo-list") {
      await viewTask();
    } else if (option.choice === "Exit") {
      conditions = false; // Set conditions to false to exit the loop
    }
  }
};

// Function to add a new task to the todo list
let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task",
    }
  ]);
  todoList.push(newTask.task); // Add the new task to the todo list
  console.log(`\n${newTask.task} task added in new list`); // Confirm the task addition
};

// Function to view all tasks in the todo list
let viewTask = () => {
  console.log("\n Your Todo-list: \n");
  todoList.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`); // Display each task with its index
  });
}

// Function to delete a task from the todo list
let deleteTask = async () => {
  await viewTask(); // Display the current tasks
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to delete:",
    }
  ]);
  let deletedTask = todoList.splice(taskIndex.index - 1, 1); // Remove the selected task from the todo list
  console.log(` ${deletedTask} \n this task has been deleted successfully from your Todo-List\n `); // Confirm the task deletion
}

// Function to update a task in the todo list
let updateTask = async () => {
  await viewTask(); // Display the current tasks
  let updateTaskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no.' of the task you want to update:",
    },
    {
      name: "newTask",
      type: "input",
      message: "Now enter the new task name:",
    }
  ]);
  todoList[updateTaskIndex.index - 1] = updateTaskIndex.newTask; // Update the selected task with the new name
  console.log(`\n Task at index no. ${updateTaskIndex.index} updated successfully (for updated list check option: "View Todo-List")`); // Confirm the task update
}

// Run the main function
main();

