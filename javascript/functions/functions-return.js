function calculate(operator){
	let sign = operator;
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	let n1 = parseInt(s1);
	let n2 = parseInt(s2);
	let res1 = calculateNode(n1, n2, sign)
	console.log(res1);
}

function calculateNode(n1, n2, sign){
	let res;
	switch(sign){
		case '+': {
			res = addition(n1, n2)
		break;	
		}
		case '-': {
			res = substraction(n1, n2);
		break;	
		}
		case '*': {
			res = multiplication(n1, n2);
		break;	
		}
		case '/': {
			res = division(n1 ,n2 );
		break;	
		}
	}
	return res;
}

function addition(n1, n2) {
	let res = n1 + n2;
	return res;
}

function substraction(n1, n2) {
	let res = n1 - n2;
	return res;
}

function multiplication(n1, n2) {
	let res = n1 * n2;
	return res;
}

function division(n1, n2 ) {
	let res = n1 / n2;
	return res;
}
calculateNode(123,123,'*');