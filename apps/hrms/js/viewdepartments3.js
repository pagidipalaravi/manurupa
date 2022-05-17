function onLoad(){
	console.log("onLoad start");
	// read the data from json file
	
	if (departments.length != 0 ){
		let header  = ""
			header = 
			`<tr>
				<th>Department Id</th>
				<th>Department Name</th>
				<th>Manager Id</th>
				<th>Location Id</th>
			</tr>
			`
		let rows = "";
		for (let i = 0; i < departments.length; i++ ){
			let row = "";
			deptId = departments[i].departmentId;
			console.log("departmentId = " + departments[i].departmentId);
			row = 	`<tr>
						<td>${departments[i].departmentId}</td>
						<td>${departments[i].departmentName}</td>
						<td>${departments[i].managerId}</td>
						<td>${departments[i].locationId}</td>
					</tr>`
			rows = rows + row;
		}
		let table = "<table>" + header + rows + "</table>";
		document.getElementById("dept-table").innerHTML = table;
	}
	else {
		document.getElementById("dept-table").innerHTML = "NO Data Found";
	}
	console.log("onLoad end");	
}