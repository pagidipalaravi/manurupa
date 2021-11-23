function addition() {
	//All JavaScript variables must be identified with unique names. These unique names are called identifiers.
	/*
	Names can contain letters, digits, underscores, and dollar signs.
	Names must begin with a letter
	Names can also begin with $ and _ (but we will not use it in this tutorial)
	Names are case sensitive (y and Y are different variables)
	Reserved words (like JavaScript keywords) cannot be used as names
	*/
	//var !num1 = 15; // declaration // Error : Unexpected token '!'
	var num1 = 15; // declaration // 
	var num2 = 15; // declaration // 
	
	var num2 = 16; // redeclartion is possible
	var res1 = num1 + num2;
	document.getElementById("demo").innerHTML ="" + res1;
	let num = 16; // redeclartion is possible
	let NUM = 16; // redeclartion is possible
	//let if = 16; // redeclartion is possible //Error : Unexpected token 'if'
	let num3 = 50; // declaration
	let num4 = 60; // redeclartion is not possible // Error: 'num3' has already been declared
	let res2 = num3 + num4;
	document.getElementById("demo").innerHTML ="" + res2;
}