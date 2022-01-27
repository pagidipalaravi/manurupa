function sub() { //function with on org
//Block of code
	let result = 100-50;
	console.log("static sub ="+result);
}


function sub(n1, n2) { //function with orguments
//Block of code
	let result = n1-n2;
	console.log("dynamic sub = "+result);
}
function addition(){
	let res = add(a,b);
	console.log(res);
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