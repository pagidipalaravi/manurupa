function main() {
	// arrayToString();
	// arrayToStringWithSeparator();
	// deleteLastElement();
	// insertElemetAtTheEnd();
	// deleteFirstElemet();
	// sort();
	reverse();
}
function arrayToString() {
	let employees = ["charan", "ravi", "chakri", "sampath"];
	console.log(employees.toString());
}
function arrayToStringWithSeparator() {
	let employees = ["charan", "ravi", "chakri", "sampath"];
	console.log(employees.join('*'));
}
function insertFirst() {
	let employees = ["Ravi", "sampath", "srinivas", "chakri"];
	employees.unshift("charan");
	console.log(employees);
}
function insertLast() {
	let employees = ["Ravi", "sampath", "srinivas", "chakri"];
	employees.push("charan");
	console.log(employees);
}
function deleteFirst() {
	let employees = ["Ravi", "sampath", "srinivas", "chakri"];
	employees.shift();
	console.log(employees);
}
function deleteLast() {
	let employees = ["charan", "ravi", "chakri", "sampath"];
	employees.pop();
	console.log(employees);
}
function merge() {
	let employees1 = ["charan", "ravi"];
	let employees2 = ["chakri", "sampath"];
	employees1.concat(employees2);
}
function cut() {
	let employees = ["charan", "ravi", "chakri", "sampath"];
	let employees2 = employees.slice(3);
	console.log(employees2);
}
function spliceInsert() {
	let employees1 = ["charan", "ravi", "chakri", "sampath"];
	let employees2 = employees1.splice(2, 0, "prasanth", "uday");
	console.log(employees2);
}
function spliceInsertAnddelete() {
	let employees1 = ["charan", "ravi", "chakri", "sampath"];
	let employees2 = employees1.splice(2, 2, "prasanth", "uday");
	console.log(employees2);
}
function spliceDelete() {
	let employees1 = ["charan", "ravi", "chakri", "sampath"];
	let employees2 = employees1.splice(0, 2, "prasanth", "uday");
	console.log(employees2);
}
function sort() {
	let employees = ["charan", "ravi", "chakri", "sampath","prasanth", "uday"];
	employees.sort();
	console.log(employees);
}
function reverse() {
	let employees = ["charan", "ravi", "chakri", "sampath","prasanth", "uday"];
	employees.sort();
	employees.reverse();
	console.log(employees);
}