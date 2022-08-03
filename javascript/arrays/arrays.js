function main() {
	// emptyArray();
	// arrayWithValues();
	// employeeArray();
	// emptyArrayWithNewKeyWord();
	// arrayWithNewKeyWord();
	// updateArray();
	// arrayType();
	// arrayLength();
	// arrayFirstElement();
	// arrayLastElement();
	iterateArray();
	// add();
}
function emptyArray() {
	const employees = [];
	console.log(employees);
}
function emptyArrayWithNewKeyWord() {
	let array = new Array();
	console.log(array);
}
function arrayWithValues() {
	const employees = ["Sai", "Raja", "Bharath"];
	console.log(employees);
}
function arrayWithNewKeyWord() {
	let array = new Array("Ravi", "Raja", "Praneeth");
	console.log(array);
}
function updateArray() {
	let employeesArray = ["Sai", "Raja", "Bharath"];
	employeesArray[0] = "Nani";
	console.log(employeesArray);
}
function arrayType() {
	let array = [];
	console.log(typeof array);
}
function arrayLength() {
	let array = [];
	console.log(array.length);
}
function arrayFirstElement() {
	let employeesArray = ["Sai", "Raja", "Bharath"];
	console.log(employeesArray[0]);
}
function arrayLastElement() {
	let employeesArray = ["Sai", "Raja", "Bharath"];
	console.log(employeesArray[length - 1]);
}
function iterateArray() { //  use 'for of' to iterate arrays
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	let car;
	for (car of cars) {
		text += car + " ";
	}
	console.log(text);
}
function add() {
	let employeesArray = ["Sai", "Raja", "Bharath"];
	employeesArray.push("Ravi");
	console.log(employeesArray);
}
function add() {
	let employeesArray = ["Sai", "Raja", "Bharath", "Swarna", "Aparna"];
	employeesArray.splice(2, 0, "Ravi");
	console.log(employeesArray);
}
/*
function deleteArray(){
	let employeesArray = ["Sai","Raja","Bharath"];
	employeesArray[0] = "";
}
*/