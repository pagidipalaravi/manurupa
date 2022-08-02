function onLoad(){
	console.log("onLoad start");
	const departments = [
		{"departmentId":10,"departmentName":"Administration","managerId":200,"locationId":1700},
		{"departmentId":20,"departmentName":"Marketing","managerId":201,"locationId":1800},
		{"departmentId":30,"departmentName":"Purchasing","managerId":114,"locationId":1700},
		{"departmentId":40,"departmentName":"Human Resources","managerId":203,"locationId":2400},
		{"departmentId":50,"departmentName":"Shipping","managerId":121,"locationId":1500},
		{"departmentId":60,"departmentName":"IT","managerId":103,"locationId":1400},
		{"departmentId":70,"departmentName":"Public Relations","managerId":204,"locationId":2700},
		{"departmentId":80,"departmentName":"Sales","managerId":145,"locationId":2500},
		{"departmentId":90,"departmentName":"Executive","managerId":100,"locationId":1700},
		{"departmentId":100,"departmentName":"Finance","managerId":108,"locationId":1700},
		{"departmentId":110,"departmentName":"Accounting","managerId":205,"locationId":1700},
		{"departmentId":120,"departmentName":"Treasury","locationId":1700},
		{"departmentId":130,"departmentName":"Corporate Tax","locationId":1700},
		{"departmentId":140,"departmentName":"Control And Credit","locationId":1700},
		{"departmentId":150,"departmentName":"Shareholder Services","locationId":1700},
		{"departmentId":160,"departmentName":"Benefits","locationId":1700},
		{"departmentId":170,"departmentName":"Manufacturing","locationId":1700},
		{"departmentId":180,"departmentName":"Construction","locationId":1700},
		{"departmentId":190,"departmentName":"Contracting","locationId":1700},
		{"departmentId":200,"departmentName":"Operations","locationId":1700},
		{"departmentId":210,"departmentName":"IT Support","locationId":1700},
		{"departmentId":220,"departmentName":"NOC","locationId":1700},
		{"departmentId":230,"departmentName":"IT Helpdesk","locationId":1700},
		{"departmentId":240,"departmentName":"Government Sales","locationId":1700},
		{"departmentId":250,"departmentName":"Retail Sales","locationId":1700},
		{"departmentId":260,"departmentName":"Recruiting","locationId":1700},
		{"departmentId":270,"departmentName":"Payroll","locationId":1700}
		];
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