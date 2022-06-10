function blockscope()
{
	let x=2;
	let y=3;
	let z=x+y;
	document.getElementById("demo").innerHTML=z;
}
function funcscope(){
	let x=3;
	let y=1;
	{
		let a = 5;
		const b = 3;
		document.getElementById("demo1").innerHTML=a + b;
	}
	/*document.getElementById("demo1").innerHTML=a;*/ //can't access the funcscope variable.
}
function globalscope(){
	let x=3;
	let y=1;
	{
		var a = 5;
		var b = 3;
		document.getElementById("demo2").innerHTML=a + b;
	}
	document.getElementById("demo2").innerHTML=a; //Global variables can be accessed from anywhere.
}


