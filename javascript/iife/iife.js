function onLoad(){
	console.log("This is  global scope function calling from html");
    regularFunction();
}
//iife function
(function (x) {
	console.log("This is IIFE global scope function"+ x);
	}
)
(12)
//regular function
function regularFunction(){
	console.log("This is Regular Function");
	(
		function () {  
			console.log("This is IIFE inner scope function");
		}
	)
	()
}