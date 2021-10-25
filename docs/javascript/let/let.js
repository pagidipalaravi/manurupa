function letFun(){
	var  x = 10;
	{  
		let x = 2;
	}
	document.getElementById("demo").innerHTML = x;
	var carName;// declaration will come first
	carName = "Volvo";//assignment will come after declaration
//carName = "Volvo";

//var carName;
// do not assign values to varaibles with out declaration
}