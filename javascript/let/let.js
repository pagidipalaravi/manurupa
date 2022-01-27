"use strict"
function letFun(){
	var a = 2;
	var a = 6; 
	let x = 2;
	//let x = 6; //Identifier 'x' has already been declared
	//document.getElementById("demo").innerHTML = x;
	}
function functionScope(){
	let tv = "MI";
		{// blockscope
			let mobile = "Asus";
		}
	document.getElementById("mobile1").innerHTML = mobile; //mobile is not defined
	document.getElementById("tv1").innerHTML = tv;//tv is not defined
}
function reDeclaration(){
	let tv = "MI";
		{// blockscope
			let tv = "RealMe";
			document.getElementById("tv1").innerHTML = tv;//tv is not defined
		}
	document.getElementById("tv1").innerHTML = tv;//tv is not defined
}

function reAssignment(){
	let tv = "MI"; // declaration and assginment
		tv = "Samsung" // reassignment
		{// blockscope
			let mobile = "RealMe"; // declaration and assginment
				mobile = "Oneplus"	//reassignment
			document.getElementById("mobile1").innerHTML = mobile;
		}
	document.getElementById("tv1").innerHTML = tv;//tv is not defined
}