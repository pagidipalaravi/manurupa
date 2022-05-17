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

function ifTrue(){
	if (1==1) {
		console.log("ifTrue() true Condition");
	}
}
function ifFalse(){
	if (1==2) {
		console.log("ifFalse() false condition");
	}
}
function ifElseTrue(){
	if (1==1) {
		console.log("ifElseTrue true condition");
	}
	else {
		console.log("ifElseTrue false condition");
	}
}
function ifElseFalse(){
	if (1==2) {
		console.log("ifElseFalse true condition");
	}
	else {
		console.log("ifElseFalse false condition");
	}
}

function ifCondition() {
	let age = 17;
	if (age>=18) {
		console.log("you are eligible to apply for Driving Licence");
	}
}
function ifElseCondition() {
	var age = 16;
	if (age>=18) {
		console.log("you are eligible to apply for Driving Licence");
		}
	else {
		console.log("you are not eligible to apply for Driving Licence, please apply after"+" "+(18-age)+" "+"years");
	}
}
function elseIfLadder() {
	const time = new Date().getHours();
	//const time = 23;
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