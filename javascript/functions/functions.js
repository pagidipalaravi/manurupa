function calculate(operator){
	let sign = operator;
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	let n1 = parseInt(s1);
	let n2 = parseInt(s2);
	calculateNode(n1, n2, sign)
}

function calculateNode(n1, n2, sign){
	switch(sign){
		case '+': {
			addition(n1, n2)
		break;	
		}
		case '-': {
			substraction(n1, n2);
		break;	
		}
		case '*': {
			multiplication(n1, n2);
		break;	
		}
		case '/': {
			division(n1 ,n2 );
		break;	
		}
	}
}

function addition(n1, n2) {
	let res = n1 + n2;
	console.log(res);
}

function substraction(n1, n2) {
	let res = n1 - n2;
	console.log(res);
}

function multiplication(n1, n2) {
	let res = n1 * n2;
	console.log(res);
}

function division(n1, n2 ) {
	let res = n1 / n2;
	console.log( res);
}
calculateNode(123,123,'*');