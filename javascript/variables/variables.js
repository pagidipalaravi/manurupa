function variables() {
	console.log("variables method start");
	//identifiers();
	//nothing();
	vars();
	console.log("variables method end");
}

function identifiers() {
	console.log("identifiers method start");
	num1 = 123;
	num2 = 123;
	num$ = 123;
	num_ = 124;
	$num = 123;
	_num = 321;
	num3 = 123; // case sensitive
	NUM3 = 321; // case sensitive
	
	//num# = 123; //can't have a special characters other than _ and $
	//num& = 124; //can't have a special characters other than _ and $
	//1num = 123; //can't start variable name with digit.
	//2num = 124; 
	//can't start variable name with digit.
	//for = 123; 
	//reserved words are not allowed.
	//if = 321; 
	//reserved words are not allowed.
	
	res = num1 +num2;
	console.log(res);
	console.log("identifiers method end");
}

function nothing() {
	console.log("nothing method start");
	num1 = 123;
	num2 = 234;
	res = num1 + num2;
	console.log(res);
	console.log("nothing method end");
}

function vars() {
	console.log("vars");
	//variable declaration
	var num1;
	var num2;
	var res1 = num1 + num2;
	console.log(num1);
	console.log(typeof num1);
	console.log(res1);
	console.log(typeof res1);
	
	//variable defination
	num1 = 123;
	num2 = 321;
	var res2 = num1 + num2;
	console.log(num1);
	console.log(typeof num1);
	console.log(res2);
	console.log(typeof res2);
	
	//re-declaration is possible, which is wrong
	//Do not use the var instead use let
	var numred;
	var numred;
	
	//variable usage before variable defination, declaration is possible, which is wrong
	//Do not use the var instead use let
	var res3 = num3 + num4; // variable usage
	var num3; //variable declaration
	var num4;
	console.error(res3);
	num3 = 123; //variable defination
	num4 = 321;
	console.log(res3);
	
	//variable declaration and variable defination in single line
	var num5 = 123;
	var num6 = 234;
	var res4 = num5 + num6;
	console.log(num5);
	console.log(typeof num5);
	console.log(res1);
	console.log(typeof res4);
}
	//identifiers();
	//nothing ();
	//vars();