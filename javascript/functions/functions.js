function onLoad(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	//calling function
	//sub();
	//sub(98765, 12345);
	let result = sub(n1, n2);
	console.log(result);
}
//called function
function sub() { //function with no orguments
	let result = 100-50;
	console.log("static sub ="+result);
}
/*function sub(n1, n2) { //function with orguments
	let result = n1-n2;
	console.log("dynamic sub = "+result);
}*/

function sub(n1, n2) { //function with orguments
	let result = n1-n2;
	return result;
}

function addition(){
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	let n1 = parseInt(s1);
	let n2 = parseInt(s2);
	let res = n1 + n2;
	console.log(res);
}
function substraction(){
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	let res = parseInt(s1)-parseInt(s2);
	console.log(res);
}
function multiplication(){
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	console.log( parseInt(s1) * parseInt(s2) );
}
function division(){
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	console.log( parseInt(s1) / parseInt(s2) );
}

function add(a,b) {
	let sum = a + b;
	return sum;
}
function toCelsius() {
	let fString = document.getElementById("f").value;
	let fnum = parseInt(fString);
	console.log(typeof fnum);
	let c = toCelsiusConversion(fnum);
	console.log(c);
}
function toCelsiusConversion(f) {
  return (5/9) * (f-32);
}