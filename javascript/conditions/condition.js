function main(){
	//ifTrue();
	//ifFalse();
	//ifElseTrue();
	//ifElseFalse();
	//ifCondition();
	//ifElseCondition();
	//elseIfLadder();
	switchCaseBreakCondtion();
}
//
function ifTrue(){
	if (true) {
		console.log("true condition");
	}
}
function ifFalse(){
	if (false) {
		console.log("true condition");
	}
}
function ifElseTrue(){
	if (true) {
		console.log("true condition");
	}
	else {
		console.log("false condition");
	}
}
function ifElseFalse(){
	if (false) {
		console.log("true condition");
	}
	else {
		console.log("false condition");
	}
}

function ifCondition() {
	var age = 17;
	if (age>=18) {
		console.log("you are eligible to apply for Driving Licence");
	}
}
function ifElseCondition() {
	var age = 19;
	if (age>=18) {
		console.log("you are eligible to apply for Driving Licence");
		}
	else {
		console.log("you are not eligible to apply for Driving Licence, please apply after"+" "+(18-age)+" "+"years");
	}
}
function elseIfLadder() {
	const time = new Date().getHours();
	let greeting;
	if (time<10) {
		greeting = "Good Morning";
	}
	else if (time < 12) {
		greeting = "Good Afternoon";
	}
	else if (time < 16) {
		greeting = "Good Evening";
	}
	else if (time < 20) {
		greeting = "Good Day";
	}
	else {
		greeting = "Good Noon";
	}
	console.log(greeting);
}

//
function switchCaseBreakCondtion(){
	let day;
	console.log(new Date().getDay());
	switch (new Date().getDay()) {
	  case 0:
		day = "Sunday";
		break;
	  case 1:
		day = "Monday";
		break;
	  case 2:
		day = "Tuesday";
		break;
	  case 3:
		day = "Wednesday";
		break;
	  case 4:
		day = "Thursday";
		break;
	  case 5:
		day = "Friday";
		break;
	  case  6:
		day = "Saturday";
	}
	console.log(day);
}