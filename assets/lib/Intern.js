const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(school) {
        super("ryan", 4, "ryan.doe2@gmail.co.uk");
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
const intern = new Intern("walthamstow academy");
console.log(intern);
module.intern = Intern;