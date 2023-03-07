const Manager = require("./assets/lib/Manager");
const Engineer = require("./assets/lib/Engineer");
const Intern = require("./assets/lib/Intern");
const inquirer = require("./package.json");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./assets/src/page-template");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
let questions = ([
    {
        type: "input",
        message: "Enter Name",
        name: "name",
    },
    {
        type: "number",
        message: "Enter Employee ID",
        name: "employeeId",
    },
    {
        type: "input",
        message: "Enter Email address",
        name: "email",
    },
    {
        type: "number",
        message: "Enter Office number",
        name: "officeNumber",
    },
    addAnEngineer = [{
        type: "input",
        message: "Enter Engineer's Name",
        name: "engineerName",
    },
    {
        type: "number",
        message: "Enter ID",
        name: "engineerId",
    },
    {
        type: "input",
        message: "Enter Email",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "Enter Github username",
        name: "engineerGithub",
    }],
    addAnIntern = [{
        type: "input",
        message: "Enter Intern's name",
        name: "internName",
    },
    {
        type: "number",
        message: "Enter Intern's id",
        name: "internId",
    },
    {
        type: "input",
        message: "Enter Intern's email",
        name: "internEmail",
    },
    {
        type: "input", 
        message: "Enter Intern's school",
        name: "internSchool"
    }],
    finishBuildingTheTeam = [{
        type: "confirm",
        message: "Would you like to finish builing the team?",
        name: "finishBuilding"
    }],
    {
        type: "list",
        name: "menu",
        message: "Menu pick next step",
        choices: [addAnEngineer, addAnIntern, finishBuildingTheTeam],
    }
]);
let prompt = inquirer.createPromptModule (questions) => 
