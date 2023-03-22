const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    // getElements(){
        getOfficeNumber = () => {
            return this.officeNumber;
        };
        getRole = () => {
            return "Manager";
        };
    // };
};
const manager = new Manager();
console.log(manager);
module.exports = Manager;