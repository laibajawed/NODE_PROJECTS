#!usr/bin/env node
import inquirer from "inquirer";

// Student class definition
class Student {
  static counter = 10000; // Static counter for student IDs
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.id = Student.counter++; // Assign unique ID and increment counter
    this.name = name;
    this.courses = []; // Initialize an empty array for courses
    this.balance = 100; // Initial balance
  }

  // Method to enroll a student in a course
  enroll_course(course: string) {
    this.courses.push(course);
  }

  // Method to view a student's balance
  view_balance() {
    console.log(`${this.name} has a balance of ${this.balance}`);
    return this.balance;
  }

  // Method to pay student fees
  pay_fees(amount: number) {
    this.balance -= amount;
    console.log(` ${amount} Fees paid successfully for ${this.name}`);
    console.log(`Remaining balance: ${this.balance}`);
    return this.balance;
  }

  // Method to display student status
  show_status() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Courses: ${this.courses}`);
    console.log(`Balance: ${this.balance}`);
  }
}

// StudentManager class definition to manage students
class Student_manager {
  students: Student[];

  constructor() {
    this.students = []; // Initialize an empty array for students
  }

  // Method to add a new student
  add_student(name: string) {
    let student = new Student(name);
    this.students.push(student);
    console.log(`Student: ${name} added successfully. Student ID: ${student.id}`);
  }

  // Method to enroll a student in a course
  enroll_student(student_id: number, course: string) {
    let student = this.find_student(student_id);
    if (student) {
      student.enroll_course(course);
      console.log(`${student.name} enrolled in ${course} successfully`);
    } else {
      console.log("Student not found, please enter a correct student ID.");
    }
  }

  // Method to view a student's balance
  view_student_balance(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.view_balance();
    } else {
      console.log("Student not found, please enter a correct student ID.");
    }
  }

  // Method to pay student fees
  pay_student_fees(student_id: number, amount: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.pay_fees(amount);
    } else {
      console.log("Student not found, please enter a correct student ID.");
    }
  }

  // Method to display student status
  show_student_status(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.show_status();
    } else {
      console.log("Student not found, please enter a correct student ID.");
    }
  }

  // Method to find a student by student ID
  find_student(student_id: number) {
    return this.students.find((std) => std.id === student_id);
  }
}

// Main function to run the program
async function main() {
  console.log("Welcome to Laiba's - Student Management System");
  let student_manager = new Student_manager();
  while (true) {
    let choice = await inquirer.prompt([
      {
        name: "option",
        type: "list",
        message: "Choose an option:",
        choices: [
          "Add a new student",
          "Enroll a student in a course",
          "View a student balance",
          "Pay student fees",
          "Show student status",
          "Exit"
        ],
      }
    ]);

    // Using switch case to handle user choice
    switch (choice.option) {
      case "Add a new student":
        let name_input = await inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: "Enter student name:",
          }
        ]);
        student_manager.add_student(name_input.name);
        break;

      case "Enroll a student in a course":
        let course_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: "Enter a student ID:",
          },
          {
            name: "course",
            type: "input",
            message: "Enter a course name:",
          }
        ]);
        student_manager.enroll_student(course_input.student_id, course_input.course);
        break;

      case "View a student balance":
        let balance_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: "Enter a student ID:",
          }
        ]);
        student_manager.view_student_balance(balance_input.student_id);
        break;

      case "Pay student fees":
        let fees_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: "Enter a student ID:",
          },
          {
            name: "amount",
            type: "number",
            message: "Enter amount to pay:",
          }
        ]);
        student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
        break;

      case "Show student status":
        let status_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: "Enter a student ID:",
          }
        ]);
        student_manager.show_student_status(status_input.student_id);
        break;

      case "Exit":
        console.log("Thank you for using Laiba's - Student Management System");
        process.exit();
    }
  }
}

// Calling the main function
main();
