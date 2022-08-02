/* Global scope varaibles */
g1 = 1; 	// global scope undeclared type variable.
var g2 = 2; // global scope var type variable.
let g3 = 3; // global scope let type variable.
onLoad();
function onLoad() {
	/* Function scope variables */
	f1 = 4; // Bad Syntax, use let instead of undeclared // function scope undeclared type variable.// f1 is global scope,even if you are assignning value to the variable. 
	var f2 = 5; // Bad Syntax, use let instead of var // function scope var type variable
	let f3 = 6; // function scope let type variable
	{
		/* Block scope variables */
		b1 = 7; 	//Bad Syntax, use let instead of undeclared//block scope undeclaredtype variable.// b1 is global scope,even if you are assignning value to the variable.
		//let b1 = 7; // Good Syntax.
		var b2 = 8; //Bad Syntax, use let instead of var // block scope var type variable
		//let b2 = 8; // Good Syntax.
		let b3 = 9; // block scope let type variable
		// we can access global scope variables in block scope.
		console.log("g1 value = " + g1 + " and typeof = "+ typeof g1);
		console.log("g2 value = " + g2 + " and typeof = "+ typeof g2);
		console.log("g3 value = " + g3 + " and typeof = "+ typeof g3);
		// we can access function scope varaibles in block scope.
		console.log("f1 value = " + f1 + " and typeof = "+ typeof f1);
		console.log("f2 value = " + f2 + " and typeof = "+ typeof f2);
		console.log("f3 value = " + f3 + " and typeof = "+ typeof f3);
		// we can access block scope variables in block scope
		console.log("b1 value = " + b1 + " and typeof = "+ typeof b1); 
		console.log("b2 value = " + b2 + " and typeof = "+ typeof b2); 
		console.log("b3 value = " + b3 + " and typeof = "+ typeof b3); 
	}
	// we can access global scope variables in function scope.
	console.log("g1 value = " + g1 + " and typeof = "+ typeof g1);
	console.log("g2 value = " + g2 + " and typeof = "+ typeof g2);
	console.log("g3 value = " + g3 + " and typeof = "+ typeof g3);
	// we can access function scope variables in the function scope.
	console.log("f1 value = " + f1 + " and typeof = "+ typeof f1);
	console.log("f2 value = " + f2 + " and typeof = "+ typeof f2);
	console.log("f3 value = " + f3 + " and typeof = "+ typeof f3);
	// we can access only undefined, var type block scope variables in function scope
	console.log("b1 value = " + b1 + " and typeof = "+ typeof b1); 
	console.log("b2 value = " + b2 + " and typeof = "+ typeof b2); 
	// we cannot access only let type block scoped variable outside of the block.
	//console.log("b3 value = " + b3 + "and typeof = "+typeof b3);  
}
console.log("g1 value = " + g1 + " and typeof = "+ typeof g1);
console.log("g2 value = " + g2 + " and typeof = "+ typeof g2);
console.log("g3 value = " + g3 + " and typeof = "+ typeof g3);
// we cannot access Function scoped variables in global scope.
console.log("f1=" + f1);// f1 is defined because we called onLoad function at line undeclared 5
//console.log("f2=" + f2);// f2 is not defined we are acessing before its declaration
//console.log("f3=" + f3);// f3 is not defined we are acessing before its declaration.
// we cannot access block scoped variables in global scope.
console.log("b1=" + b1);// b1 is defined because we called onLoad function at line undeclared 5.
//console.log("b2=" + b2);// Reference Error: b2 is not defined.
//console.log("b3=" + b3);// Reference Error: b3 is not defined.
