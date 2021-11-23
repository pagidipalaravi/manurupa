function forLoop() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	console.log(cars.length);
	let i = 0;
	for ( let i = 0; i < cars.length; i++; ) {
		text += cars[i] + "<br>";
		text = taxt + cars[i] + "<br>";
		console.log(cars[i]);
		
	}
	document.getElementById("demo").innerHTML = text;
}

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