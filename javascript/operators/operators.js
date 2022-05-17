function main(){
	console.log("main method start");
	/*
	add();
	mul();
	sub();
	div();
	rem();
	increment();
	decrement();
	append();
	*/
	comparison();
	console.log("main method end");
}
function add() {
	let x;
	console.log(typeof x);
	console.log(x);
	x = 5;
	console.log(typeof x);
	console.log(x);
	x = "s";
	console.log(typeof x);
	console.log(x);
	let y = 2;
	let z = x + y;
	console.log(z);
}
function mul() {
	let x = 5;
	let y = 2;
	let z = x * y;
	console.log(z);
}
function sub() {
	let x = 5;
	let y = 2;
	let z = x - y;
	console.log(z);
}
function div() {
	let x = 5;
	let y = 2;
	let z = x / y;
	console.log(z);
}
function rem() {
	let x = 5;
	let y = 2;
	let z = x % y;
	console.log(z);
}
function increment() {
	let x = 5;
	let y = 5;
	let a = x++; //post
	let b = ++y; //pre
	console.log(x);
	console.log(y);
	console.log(a);
	console.log(b);
}
function decrement() {
	let x = 5; // 4
	let y = 5; // 4
	console.log(x);
	console.log(y);
	let a = x--; //post // 5
	let b = --y; //pre // 4
	console.log(x);
	console.log(y);
	console.log(a);
	console.log(b);
}

function add() {
	let x = 5;
	let y = 2;
	x += y;
	x = x + y;
	console.log(x);
}

function append() {
	let fn = 'Ravi';
	let ln = 'Kumar';
	let x = 11;
	let y = 12;
	let z = '13';
	let a = x + y + z;
	let b = z + y + x;
	console.log(a);
	console.log(b);
	console.log(fn+" "+ln);
}
function comparison() {
	let x = 11;
	let y = 12;
	let z = 11;
	console.log(x==y);
	console.log(x==z);
	console.log(x!=y);
	console.log(x!=z);
}

/*
What is the overloaded operator in javascript and java? 
+ addition and append
What is difference between == and === operators?
What is ternary ? operator?
*/