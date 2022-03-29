function variables() {
	identifiers();
	nothing ();
	vars();
}
function identifiers () {
	console.log("identifiers");
	num1 = 123;
	num2 = 321;
	num$ = 123;
	num_ = 321;
	$num = 123;
	_num = 321;
	num3 = 123; // case sensitive
	NUM3 = 321; // case sensitive
	//1num; // can't start variable name with digit.
	//2num; // can't start variable name with digit.
	//for = 123; //reserved words are not allowed.
	//if = 321; //reserved words are not allowed.
	res = num1 +num2;
	console.log(res);
}
function nothing () {
	console.log("nothing");
	num1 = 123;
	num2 = 234;
	res = num1 + num2;
	console.log(res);
}

function vars() {
	console.log("vars");
	var num1; //variable declaration
	var num2;
	var res1 = num1+num2;
	console.log(res1);
	num1 = 123; //variable defination
	num2 = 321;
	var res2 = num1+num2;
	console.log(res2);
	//re-declaration is possible
	var numred;
	var numred;
	// usage before declaration
	var res3 = num3 + num4; // variable usage
	var num3; // variable declaration
	var num4;
	var res3 = num1 + num2;
	console.log(res3);
	num3 = 123; //variable defination
	num4 = 321;
	console.log(res3);
}
