"use strict"
function constVariable(){
	constInitialization();
	constAssignment();
	constHoisting();
	constBlockScope();
	constRedeclarationAndBlockScope();
}
function constRedeclaration(){
	var a = 1;
	var a = 2; 
	const x = 1;
	//const x = 2; //Identifier 'x' has already been declared
}

function constInitialization(){
	let num1; // declare
	num1 = 1; // define
	//const NUM1; // Missing initializer in const declaration
	const NUM1 = 2; // declaration + initialization
}
function constAssignment(){
	let num1; // declare
	num1 = 1; // define
	const NUM1 = 2; // declaration + initialization
	//NUM1 = 3; // TypeError: Assignment to constant variable.
}
function constHoisting(){
	c = a + b;
	var a = 1;
	var b = 2;
	var c;
	console.log(c);
	//z = x + y; // Cannot access 'x' before initialization
	const x = 1;
	const y = 2;
	const z = 0;
	//z = x + y; // TypeError: Assignment to constant variable.
	console.log(z);
}
function constBlockScope() {
	{
		const X = 1;
		var y = 2
	}
	//console.log(x); // ReferenceError: x is not defined // x can NOT be used here
	console.log(y); // y can be used here
}
function constRedeclarationAndBlockScope() {
	var x = 1;
	const y = 2
	console.log(x);
	console.log(y);
	{
		var x = 3;
		const y = 4;
		console.log(x);
		console.log(y);
	}
	console.log(x);
	console.log(y);
}