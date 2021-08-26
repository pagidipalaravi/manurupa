function dateFunction(){
	const d1 = new Date();
	console.log(d1);
	const d2 = new Date(2021,08,01,10,23,0);
	console.log(d2);
	const d3 = new Date (98,8,1);
	console.log(d3);
	dateString();
	dateMilliseconds();
	datetoString();
	datetoUTCString();
	datetoDateString();
	datetoISOString();
	datetoISODates();
	datetoShortDates();
	datetoLongDates();
	datetosetFullYear();
	datetosetMonth();
	datetosetDate();
	datetosetHours();
	datetosetMinutes();
	datetosetFullYear();
};
function dateString(){
	const d4 = new Date("August 01,2021,11:13:00");
	console.log(d4);
};
function dateMilliseconds(){
	const d5 = new Date(0);
	console.log(d5);
};
function datetoString(){
	const d6 =new Date();
	console.log(d6.toString())
	
};
function datetoUTCString(){
	const d7 = new Date();
	console.log(d7.toUTCString())
};
function datetoDateString(){
	const d8 = new Date();
	console.log(d8.toDateString())
};
function datetoISOString(){
	const d9 = new Date();
	console.log(d9.toISOString())
};
function datetoISODates(){
	const d10 = new Date("2021-08-01");
	console.log(d10)
};
function datetoShortDates(){
	const d11 = new Date("08/01/2021");
	console.log(d11);
};
function datetoLongDates(){
	const d12 = new Date("08 01 2021");
	console.log(d12);
};
function datetosetFullYear(){
	const d13 = new Date();
	d13.setFullYear(2021);
	console.log(d13);
};
function datetosetMonth(){
	const d14 = new Date();
	d14.setMonth(07);
	console.log(d14);
};
function datetosetDate(){
	const d15 = new Date();
	d15.setDate(15);
	console.log(d15);
};
function datetosetHours(){
	const d16 = new Date();
	d16.setHours(21);
	console.log(d16);
};
function datetosetMinutes(){
	const d17 = new Date();
	d17.setMinutes(27);
	console.log(d17);
};
function datetocompareDates(){
	let text ;
	const d18 = new Date();
	const d19 = new Date();
	d19.setFullYear(2100,0,14);
	if (d19>d18){
		text="today is before january 14,2100.";
	}else {
		Text="today is after january 14,2100.";
	}
	
	console.log(d19);
};