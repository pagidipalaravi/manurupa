function calculate(operator){
	let a3 = operator;
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	let a1 = parseInt(s1);
	let a2 = parseInt(s2);
	let r1 = calculateNode(a1, a2, a3);// function calling
	document.getElementById("res").innerHTML = r1;
}

function calculateNode(p1, p2, p3){
	let result;
	switch(p3){
		case '+': {
			 result = addition(p1, p2);
			 return result;
		break;	
		}
		case '-': {
			result = substraction(p1, p2);
			return result;
		break;	
		}
		case '*': {
			result = multiplication(p1, p2);
			return result;
		break;	
		}
		case '/': {
			result = division(p1 ,p2 );
			return result;
		break;		
		}
	}// break;
}

function addition(p1, p2) {
	let res = p1 + p2;
	console.log(res);
	return res;
}

function substraction(p1, p2) {
	let res = p1 - p2;
	console.log(res);
	return res;
}

function multiplication(p1, p2) {
	let res = p1 * p2;
	console.log(res);
	return res;
}

function division(p1, p2 ) {
	let res = p1 / p2;
	console.log( res);
	return res;
}
calculateNode(123,123,'*');