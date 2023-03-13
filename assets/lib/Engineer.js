const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github; 
    };
    getElements(){
        this.getGithub = () => {
            return this.github
        };
        this.getRole = () => {
            return this.Engineer
        };
    };
};
const engineer = new Engineer();
console.log(engineer);
module.exports = Engineer;