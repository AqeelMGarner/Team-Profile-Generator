const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(officeNumber) {
        super("james", 2, "james.smiths@gmail.com")
        this.officeNumber = officeNumber;
    };
    getElements(){
        this.getrole = () => {
            return this.Manager
        };
        this.getName = () => {
            return this.name
        }
    };
};
const manager = new Manager(14324)
console.log(manager);
module.exports = Manager;