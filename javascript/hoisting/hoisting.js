/*
JavaScript Hoisting
	variable can be used before it has been declared.
	All the declarations is moving to the top is called hoisting.
	
*/
function onLoad() {
    hoistingFunction();
}
function hoistingFunction(){
	// this is javascript variable hoisting
    x = 5; // initilize x
    console.log(x);
    var x;// variable declarations moving to the top.
//javascript hoist declarations only not in initilizations.
    var y = 6;//initilize y
    var z = 7;//initilize z
    console.log(x + " " + y);// display y and z 

    var a = 1;// initilize a
     console.log(a + " " + b);// display a and b
    var b = 2;  // initilize b but declaration is not in top that why b value is undefined.
	// this is javascript function hoisting
	console.log(sum(10,20));  
	function sum(a,b)  
	{  
	return a+b;  
	}  

	}