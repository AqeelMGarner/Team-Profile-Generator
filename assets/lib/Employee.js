// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    }
    getElements() {
        this.getName = () => {
            return this.name;
        };  
        this.getId = () => {
            return this.id;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getrole = () => {
            return this.Employee;
        };
    };
};
const employee = new Employee(); 
console.log(employee);
module.exports = Employee;
