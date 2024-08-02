// Importing the inquirer library for user interaction
import inquirer from "inquirer"

// Defining a Student class with a name property
class Student {
    name: string
    constructor(name: string){
        this.name = name;
    }
}

// Defining a Person class with a students array property
class Person{
    students:Student[] =[]
    // Method to add a student to the students array
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

// Creating a new instance of Person
const person = new Person();

// Defining the main program function
const programStart = async (persons:Person)=>{
    // Infinite loop to keep the program running
    do{
        console.log("Welcome!")
        // Asking the user to select an option
        const ans = await inquirer.prompt({
            name : "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["Staff", "Student", "Exit"]
        })
        // Checking the user's selection
        if(ans.select == "Staff"){
            console.log("You approached the class room. Please feel free too ask any question!")
        }
        else if(ans.select == "Student"){
            // Asking the user to enter the name of the student
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the name of the student you want to interact with:"
            })
            // Checking if the student already exists in the students array
            const student = persons.students.find(val=> val.name == ans.student)

            if(!student){
                // Creating a new student object and adding it to the students array
                const name = new Student (ans.student)
                person.addStudent(name)
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New student added!");
                console.log("Current student list:");
                console.log(persons.students);
            } else{
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if(ans.select == "Exit"){
            console.log("Thank you for using our program!");
            // Exiting the program
            process.exit();
        }  
    }while (true) // The loop will continue indefinitely until the user chooses to exit
}

// Calling the programStart function with the person instance
programStart(person);