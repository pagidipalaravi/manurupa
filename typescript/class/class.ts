class Employee {

  employeeId: number;
  firstName: string;
  lastName: string;
  
  constructor(id: number, fn: string, ln: string) {
    this.employeeId = id;
    this.firstName = fn;
    this.lastName = ln;
  };
  createEmployee(id: number, fn: string, ln: string) {
    this.employeeId = id;
    this.firstName = fn;
    this.lastName = ln;
  }
  readEmployee() {
    console.log(this.employeeId + ' ' + this.firstName + ' ' + this.lastName);
  }
}
let bharath = new Employee(101, 'bharath', 'kumar');
let raja = new Employee(102, 'bharath', 'kumar');
let saibabu = new Employee(103, 'ravi', 'kumar');
let saikumar = new Employee(104, 'bharath', 'kumar');
let sampath = new Employee(105, 'ravi', 'kumar');
let chakradhar = new Employee(106, 'bharath', 'kumar');
let brahmmam = new Employee(107, 'ravi', 'kumar');
let ravi = new Employee(108, 'bharath', 'kumar');

let arrayOfEmployees = new Array();
arrayOfEmployees.push(bharath);


object1.readEmployee();
object2.readEmployee();
/* 
  updateEmployee(employeeId: number) {
  }
  deleteEmployee(employeeId: number) {
  }
  getFirstName() {
    return this.firstName;
  }
  setFirstname(fn: string) {
    this.firstName = fn;
  }
}*/
