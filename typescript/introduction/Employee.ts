class Employee {
	//properties
	firstName: string = "";
	lastName: string = "";
	email: string = "";
	//constructor
	constructor(fn: string, ln: string, email: string){
		this.firstName = fn;
		this.lastName = ln;
		this.email = email;
	}
	//get employee function
	getEmployee() {
		console.log(this.firstName + ' ' + this.lastName + ' ' + this.email);
	}
}
// create employee
let emp1 = new Employee("Aparna","Bonagiri","aparna.bonagiri@gmail.com");
let emp2 = new Employee("Ravi","Bandi","ravi.bandi@gmail.com");

//get employees
emp1.getEmployee();
emp2.getEmployee();