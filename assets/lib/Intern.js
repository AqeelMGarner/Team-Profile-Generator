const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(school) {
        super();
        this.school = school;
    };
    getElements(){
        this.getSchool = () => {
            return this.school;
        };
        this.getrole = () => {
            return this.Intern;
        };
    };
};
const intern = new Intern();
console.log(intern);
module.intern = Intern;