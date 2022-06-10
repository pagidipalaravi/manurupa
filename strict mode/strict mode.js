function main(){
	//notdefined();
	//defined();
	octalLiteral();
}
function notdefined(){
	"use strict";
	x = 3.14;  // This will cause an error (x is not defined).
	console.log(x);
}
function defined(){
	"use strict";
	x = 3.14;  
	console.log(x);
}
function octalLiteral(){
	"use strict";
	const x = 010;   // Octal numeric literals are not allowed.
	console.log(x);
}
