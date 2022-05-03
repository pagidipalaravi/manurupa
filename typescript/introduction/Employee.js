var Employee = /** @class */ (function () {
    //constructor
    function Employee(fn, ln, email) {
        //properties
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
    }
    //get employee function
    Employee.prototype.getEmployee = function () {
        console.log(this.firstName + ' ' + this.lastName + ' ' + this.email);
    };
    return Employee;
}());
// create employee
var emp1 = new Employee("Aparna", "Bonagiri", "aparna.bonagiri@gmail.com");
var emp2 = new Employee("Ravi", "Bandi", "ravi.bandi@gmail.com");
//get employees
emp1.getEmployee();
emp2.getEmployee();
