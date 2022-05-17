"use strict"
function letVariable(){
	//letRedeclaration();
	//letHoisting();
	//letBlockScope();
	letRedeclarationAndBlockScope();
}
function letRedeclaration(){
	var a = 1;
	var a = 2;
	let x = 1;
	//let x = 2; //Identifier 'x' has already been declared
}
function letHoisting(){
	c = a + b;
	var a = 1;
	var b = 2;
	var c;
	console.log(c);
	/*---------------------------------------------------*/
	//z = x + y; // Cannot access 'x' before initialization
	let x = 1;
	let y = 2;
	let z;
	z = x + y;
	console.log(z);
}
function letBlockScope() {
		//Home
		{ //room1
			let x = 1;
			var y = 2;
		}
		{ //room2
		//console.log(x);
		console.log(y);
		}
		{ //room3
		//console.log(x);
		console.log(y);
		}
	//console.log(x); //x is not defined // x can NOT be used here
	console.log(y); //y can be used here
}
function letRedeclarationAndBlockScope() {
	var x = 1;
	let y = 2;
	console.log(x);
	console.log(y);
		{
			var x = 3;
			//let y = 4;
			y = 4;
			console.log(x);
			console.log(y);
		}
	console.log(x);
	console.log(y);
}