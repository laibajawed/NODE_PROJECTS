import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("You approuched the class room. Please feel free too ask any question!");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the name of the student you want to interact with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New student added!");
                console.log("Current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Thank you for using our program!");
            process.exit();
        }
    } while (true);
};
programStart(person);
