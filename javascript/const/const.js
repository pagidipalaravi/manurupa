function reAssignmentForLet(){
	let tv = "MI"; // declaration and assginment
		tv = "Samsung" // reassignment
		{// blockscope
			let mobile = "RealMe"; // declaration and assginment
				mobile = "Oneplus"	//reassignment
			document.getElementById("mobile1").innerHTML = mobile;
		}
	document.getElementById("tv1").innerHTML = tv;//tv is not defined
}

function reAssignmentForConst(){
	const tv = "MI"; // declaration and assginment
		tv = "Samsung" // reassignment is not possible for Const variables // ERROR : Assignment to constant variable.
		{// blockscope
			const mobile = "RealMe"; // declaration and assginment
				mobile = "Oneplus"	//reassignment
			document.getElementById("mobile1").innerHTML = mobile;
		}
	document.getElementById("tv1").innerHTML = tv;//tv is not defined
}

function studentOfCMR(){
	const collegeName = "CMR";
	let studentName = "";
		studentName = "Murali";
		//collegeName = "CBIT";
		
		{
			const mobile = "RealMe"; // declaration and assginment
				mobile = "Oneplus"	//reassignment
			document.getElementById("mobile1").innerHTML = mobile;
		}
	document.getElementById("tv1").innerHTML = tv;//tv is not defined
}