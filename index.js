const Manager = require("./assets/lib/Manager");
const Engineer = require("./assets/lib/Engineer");
const Intern = require("./assets/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./assets/src/page-template");
const Employee = require("./assets/lib/Employee");
const { default: Choices } = require("inquirer/lib/objects/choices");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const employee = {
    name: Employee.name,
    id: Employee.id,
    email: Employee.email,
};
const engineer = {
    github: Engineer.github,
};
const intern = {
    school: Intern.school,
};
const manager = {
    officeNumber: Manager.officeNumber,
};

const teamArray = [];

inquirer.prompt([
    {
        type: "list",
        name: "menu",
        message: "Would you like create a team or exit application?",
        choices: [
            "Create Team",
            "Finish building the team, exit."
        ]
    }
]).then((response) => {
    switch (response.menu) {
        case "Create Team":
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter manager's name",
                    name: "name",
                },
                {
                    type: "number",
                    message: "Enter manager's id",
                    name: "managerId",
                },
                {
                    type: "input",
                    message: "Enter manager's email address",
                    name: "email",
                },
                {
                    type: "list",
                    name: "employeeRole",
                    message: "Choose employee role",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager",
                    ]
                }
            ]).then((answers) => {
                switch (answers.employeeRole) {
                    case "Engineer":
                        inquirer.prompt([
                            {
                                type: "input",
                                message: "Enter engineer's name",
                                name: "engineerName",
                            },
                            {
                                type: "number",
                                message: "Enter engineer's id",
                                name: "engineerId",
                            },
                            {
                                type: "input",
                                message: "Enter engineer's email address",
                                name: "engineerEmail",
                            },
                            {
                                type: "input",
                                message: "Enter github username",
                                name: "github",
                            },
                        ]).then((engineerAnswers) => {
                            const engineer = new Engineer(
                                engineerAnswers.engineerName,
                                engineerAnswers.engineerId,
                                engineerAnswers.engineerEmail,
                                engineerAnswers.github,
                            );
                            teamArray.push(engineer);
                            console.log("Engineer has been added to team");
                        });
                        break;
                    case "Intern":
                        inquirer.prompt([
                            {
                                type: "input",
                                message: "Enter intern's name",
                                name: "internName",
                            },
                            {
                                type: "number",
                                message: "Enter intern's id",
                                name: "internId",
                            },
                            {
                                type: "input",
                                message: "Enter intern's email address",
                                name: "internEmail",
                            },
                            {
                                type: "input",
                                message: "Enter school name",
                                name: "school",
                            },
                        ]).then((internAnswers) => {
                            const intern = new Intern(
                                internAnswers.internName,
                                internAnswers.internId,
                                internAnswers.internEmail,
                                internAnswers.school,
                            );
                            teamArray.push(intern);
                            console.log("Intern has been added to team");
                        });
                        break;
                    case "Manager":
                        inquirer.prompt([
                            {
                                type: "number",
                                message: "Enter office number",
                                name: "officeNumber",
                            },
                        ]).then((managerAnswers) => {
                            const manager = new Manager(
                                answers.name,
                                answers.id,
                                answers.internEmail,
                                managerAnswers.officeNumber,
                            );
                            teamArray.push(intern);
                            console.log("Manager has been added to team");
                        });
                        break;
                }
            });
            break;
        case "Finish building the team, exit.":

            console.log("HTML page has been completed, please refer to team.html to see your team members");
            break;
    };
});