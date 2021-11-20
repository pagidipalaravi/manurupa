function forLoop() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	var text = "";
	console.log(cars.length);
	let i = 0;
	for ( let i = 0; i < cars.length; i++ ) {
		if (cars[i] == "Saab") {
			continue;
		}
		text += cars[i] + "<br>";
		console.log(cars[i]);
	}
	console.log("after break");
	document.getElementById("demo").innerHTML = text;
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
*/