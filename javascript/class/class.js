class Employee {
	constructor(id, fn, ln) {
		this.employeeId = id;
		this.firstName = fn;
		this.lastName = ln;
	}
	createEmployee(id, fn ,ln){
		let object = new Employee(id, fn, ln);
		return object;
	}
  	readEmployee() {
		console.log(this.employeeId +' ' +this.firstName +' ' +this.lastName );
	}
}
function main(){
	object1 = new Employee(101, 'Ravi', 'kumar');
	object2 = new Employee(102, 'Bharath', 'kuamr');
	object1.readEmployee();
	object2.readEmployee();
}
object1 = new Employee(101, 'Ravi', 'kumar');
object2 = new Employee(102, 'Bharath', 'kuamr');
object1.readEmployee();
object2.readEmployee();