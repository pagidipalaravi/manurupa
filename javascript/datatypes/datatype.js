function datatypes() {
	undefinedFun();
	nullFun();
	number();
	bigint();
	string();
	booleanFunction();// classes
	arrays();
	objects();
}

function undefinedFun() {
	n1;
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
}

function nullFun() {
	let n1 = null;
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
}

function number() {
	let n1 = 10;
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
}

function bigint() {
	let n1  = 1234567890123456789012345678901234567890n;
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
}

function string(){
	s1 = "Ravi";
	s2 = 'Kumar';
	s3 = `Raja`;
	console.log("value of s1 = "+ s1 + " and type of n1 = "+ typeof s1);
	console.log("value of s2 = "+ s2 + " and type of n1 = "+ typeof s2);
	console.log("value of s3 = "+ s3 + " and type of n1 = "+ typeof s3);
}

function booleanFunction() {
	let isManager = true;
	let isMale = "true";
	let x=2;
	let y=3;
	console.log("value of isManager = "+ isManager + " and type of isManager = "+ typeof isManager);
	console.log("value of isMale = "+ isMale + " and type of isMale = "+ typeof isMale);
	console.log("value of expression = "+ (x==y) + " and type of isManager = "+ typeof (x==y));
}

function arrays() {
	const employees = ["Ravi", "Prasanth", "Raja"];
	console.log("type of car = "+ typeof cars);
}
function objects() {
	const employee ={firstName : "Ravi", lastName: "Kumar", age : "35", email : "ravi.kumar@gmail.com"};
	console.log("person name = "+ person.name +" age is = "+ person.age +" and type of person = "+ typeof person);
	
}

function dynamic() {
	n1;
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
	n1 = 12;
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
	n1 = "12";
	//num1 = parseInt(n1);
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
	n1 = true;
	console.log("value of n1 = "+ n1 + " and type of n1 = "+ typeof n1);
}								
	
