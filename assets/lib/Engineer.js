const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(github) {
        super("tasleem", 3, "tasleem.simmons@hotmail.co.uk");
        this.github = github; 
    };
    getElements(){
        this.getGithub = () => {
            return this.github
        };
        this.getrole = () => {
            return this.Engineer
        };
    };
};
const engineer = new Engineer("taslsimmons21");
console.log(engineer);
module.exports = Engineer;