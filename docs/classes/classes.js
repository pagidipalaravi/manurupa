//What is the class in JS?
//What is the object in JS?
class Employee {
	//What is constructor ?
	//constructor(employeeId, firstName, lastName, email, phoneNumber, hireDate, salary, jobId, commisionPct, managerId, departmentId){}
	constructor(firstName, phoneNumber){
		this.firstName = firstName;
		this.phoneNumber = phoneNumber;
	}
}
// How to Create an object for the class?
let emp1 = new Employee("Dileep", 9876543210);
let emp2 = new Employee("nethra", 8765432190);