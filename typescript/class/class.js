var Employee = /** @class */ (function () {
    function Employee(id, fn, ln) {
        this.employeeId = id;
        this.firstName = fn;
        this.lastName = ln;
    }
    ;
    Employee.prototype.createEmployee = function (id, fn, ln) {
        this.employeeId = id;
        this.firstName = fn;
        this.lastName = ln;
    };
    Employee.prototype.readEmployee = function () {
        var objectDetails = this.employeeId + ' ' + this.firstName + ' ' + this.lastName;
        console.log(objectDetails);
    };
    Employee.prototype.updateEmployee = function (employeeId) {
        // approx 100 lines of code
    };
    Employee.prototype.deleteEmployee = function (employeeId) {
        // approx 100 lines of code
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.setFirstname = function (fn) {
        this.firstName = fn;
    };
    return Employee;
}());
var object1 = new Employee(101, 'ravi', 'kumar');
var object2 = new Employee(102, 'bharath', 'kumar');
object1.readEmployee();
object2.readEmployee();
