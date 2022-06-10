var Employee = /** @class */ (function () {
    function Employee(name, mobile, email) {
        console.log("name = " + this.name);
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        console.log("Employee " + this.name + " Created");
    }
    Employee.prototype.getEmployee = function () {
        console.log("name = " + this.name);
    };
    return Employee;
}());
var ravi = new Employee("ravi", 1234567890, "ravi@gmail.com");
var prasnath = new Employee("prasanth", 9874563210, "prasanth@gmail.com");
ravi.getEmployee();
prasnath.getEmployee();
