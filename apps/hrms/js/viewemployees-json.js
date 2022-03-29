async function viewEmployees(){
	let data = [];
	// Reading the employeee data from employee.json file by using jquery js library
	await $.getJSON("../js/model/employee.json",function(response){
		data = response;
	});
	let table = "";
	let header = "";
	let rows = ""; 
	// View Employee header 
	header = "<tr><th>Employee Id</th> <th> First Name</th> <th>lastName</th> <th> Email</th> <th>Phone Number</th> <th>Hire Date</th> <th>Salary</th> <th>Job Id</th> <th>Commision Pct</th> <th>Manager Id</th> <th>Departement Id</th><th>Action</th></tr>";
	//Iteratte the data and construct the row and add the row to the rows
	for(let i = 0; i < data.length; i++){
		let employeeId = data[i].employeeId;
		let firstName = data[i].firstName; 
		let lastName = data[i].lastName;
		let email = data[i].email;
		let phoneNumber = data[i].phoneNumber;
		let hireDate =data[i].hireDate;
		let salary = data[i].salary;
		let jobId = data[i].jobId;
		let commisionPct = data[i].commisionPct;
		let managerId = data[i].managerId;
		let departmentId = data[i].departmentId;
		let row = `<tr><td>${employeeId}</td> <td>${firstName}</td> <td>${lastName}</td> <td>${email}</td> <td>${phoneNumber}</td> <td>${hireDate}</td><td>${salary}</td><td>${jobId}</td><td>${commisionPct}</td><td>${managerId}</td><td>${departmentId}</td><td><a href='editemployee.html'><input id =${employeeId} type='button' onclick='readValue()' value='Edit'></a><input type='button' value='Delete'></td></tr>`;
		rows = rows + row;
	}
	table = "<table> "+ header + rows +"</table>";
	document.getElementById("showData").innerHTML = table;
}

function readValue(){
	localStorage.setItem("value",firstName);
	window.location.href="editemployee.js";
}