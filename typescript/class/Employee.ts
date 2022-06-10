class Employee {
	name: string;
	mobile: number;
	email: string;

	constructor( name: string, mobile: number, email: string) {
		console.log("name = "+this.name);
		this.name = name;
		this.mobile = mobile;
		this.email = email;
		console.log("Employee "+ this.name +" Created");
	}
	getEmployee(){
		console.log("name = "+this.name);
	}
}
let ravi = new Employee("ravi", 1234567890 , "ravi@gmail.com");
let prasnath = new Employee("prasanth", 9874563210 , "prasanth@gmail.com");
ravi.getEmployee();
prasnath.getEmployee();