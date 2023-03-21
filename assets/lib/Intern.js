const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    // getElements(){
        getSchool = () => {
            return this.school;
        };
        getRole = () => {
            return "Intern"
        };
    // };
};
const intern = new Intern();
console.log(intern);
module.exports = Intern;