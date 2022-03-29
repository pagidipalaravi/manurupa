public class Employee {
	int employeeId;
	String firstName;
	String lastName;

	Employee(int id, String fn, String ln){
		this.employeeId = id;
		this.firstName = fn;
		this.lastName = ln;
	}
	
	void createEmployee(int id, String fn, String ln){
		this.employeeId = id;
		this.firstName = fn;
		this.lastName = ln;
	}
	
	void readEmployee(){
		System.out.println(" "+this.employeeId+" "+this.firstName+" "+this.lastName);
	}
	
	void updateEmployee(int employeeId){
	// approx 100 lines of code
	}
	void deleteEmployee(int employeeId){
	// approx 100 lines of code
	}
	
	public static void main(String args[]){
		Employee object1 = new Employee(101, "Ravi", "Kumar");
		Employee object2 = new Employee(102, "Surya", "Chandra");
		object1.readEmployee();
		object2.readEmployee();
	}
}