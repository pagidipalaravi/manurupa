//What is the class in JS?
	//combination of properties and functions
//What is the object in JS?
class Employee {
	//What is constructor ?
	//When it is executed?
	//What is purpose of the constructor?
	//constructor(employeeId, firstName, lastName, email, phoneNumber, hireDate, salary, jobId, commisionPct, managerId, departmentId){}
	constructor(firstName, phoneNumber){
		this.firstName = firstName;
		this.phoneNumber = phoneNumber;
	}
	getEmployee(){
		return this.fristName + "-" +this.phoneNumber;
	}
}
// How to Create an object for the class?
//What is the use of new keyword?
let emp1 = new Employee("Dileep", 9876543210);
let emp2 = new Employee("nethra", 8765432190);
let emp1Details= emp1.getEmployee();
let emp2Details= emp2.getEmployee();