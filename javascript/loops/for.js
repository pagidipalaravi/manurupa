function loops() {
	//forLoop1();
	//forLoop2();
	forLoop3();
	//forLoop4();
	//forLoop5();
}

function forLoop1() {
	for (let i=1;i<=10;i++) {
		console.log("This is my logic i wnat to execute 10 times"+i);
	}
}
function forLoop2() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];// array
	let carsString="";
	for ( let i = 0; i < cars.length; i++ ) {
		console.log(cars[i]);
		carsString = carsString+cars[i];
	}
	console.log(carsString);
}
function forLoop3() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; // array
	let text = "";
	console.log(cars.length);
	for ( let i = 0; i < cars.length; i++ ) {
		text += cars[i] + "<br>";
	}
	document.getElementById("cars").innerHTML = text;
}

function forLoop4() { // use 'for in' to get propreties of  objects;
	const employee = {employeeId:"101", firstName:"Ravi", lastName:"Pagidipala"};
	let text = "";
	for ( let index in employee ) {
		text += employee[index] + "<br>";
	}
	document.getElementById("cars").innerHTML = text;
}

function forLoop5() {//  use 'for of' to iterate arrays
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	for ( let car of cars ) {
		text += car + "<br>";
	}
	document.getElementById("cars").innerHTML = text;
}

/*
function infiniteForLoop() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	console.log(cars.length);
	for (let i = 0;  i < cars.length;  i--) {
		text += "Hello" + "<br>";
		console.log("Hello");
		document.getElementById("demo").innerHTML = text;
	}
}


function forLoop( ; ; ) {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	console.log(cars.length);
	let i = 0;
	for (  i < cars.length;  ) {
		text += cars[i] + "<br>";
		//text = taxt + cars[i] + "<br>";
		console.log(cars[i]);
		if (i == cars.length){
			break;
		}
		i++;
	}
	document.getElementById("demo").innerHTML = text;
}

*/