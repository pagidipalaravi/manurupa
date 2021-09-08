/* Global scope varaibles */
g1 = 1; 	//global scope undefined type variable.
var g2 = 2; //global scope var type variable.
let g3 = 3; //global scope let type variable.
function onLoad() {
	/* Function scope variables */
	f1 = 4; 	// function scope undefined type variable.
	var f2 = 5; // function scope var type variable
	let f3 = 6; // function scope let type variable
	{
		/* Block scope variables */
		b1 = 7; 	//bad syntax, use let instead of undefined //block scope undefined type variable.
		var b2 = 8; //bad syntax, use let instead of var // block scope var type variable
		let b3 = 9; // block scope let type variable
		console.log("g1=" + g1);
		console.log("g2=" + g2);
		console.log("g3=" + g3);
		console.log("f1=" + f1);
		console.log("f2=" + f2);
		console.log("f3=" + f3);
		console.log("b1=" + b1); //we can acess block level undefined type variable inside the block.
		console.log("b2=" + b2); //we can acess block level var type variable inside the block.
		console.log("b3=" + b3); //we can acess block level let type variable inside the block.
	}
	console.log("g1=" + g1);
	console.log("g2=" + g2);
	console.log("g3=" + g3);
	console.log("f1=" + f1);
	console.log("f2=" + f2);
	console.log("f3=" + f3);
	console.log("b1=" + b1); //we can acess block level undefined variable outside of the block.
	console.log("b2=" + b2); //we can acess block level var type variable outside of the block.
	console.log("b3=" + b3); //we cannot access  block level let type variable outside of the block.
}
console.log("g1=" + g1);
console.log("g2=" + g2);
console.log("g3=" + g3);
//console.log("f1=" + f1);
//console.log("f2=" + f2);
//console.log("f3=" + f3);
//console.log("b1=" + b1);
//console.log("b2=" + b2);
//console.log("b3=" + b3);