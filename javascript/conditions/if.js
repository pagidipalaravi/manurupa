function myFunction(){
	let day;
switch (4) {
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
	document.getElementById("demo").innerHTML = day;
}
function myFunction1(){
	let day=2;
	if (day == 0) {
		day = "Sunday";
		}
	  else if (day == 1){
		day = "Monday";
	  }
	  else if (day == 2){
		day = "Tuesday";
		break;
	  }
	  else if (day == 3){
		day = "Wednesday";
	  }
	  else if (day == 4){
		day = "Thursday";
	  }
	  else if (day == 5){
		day = "Friday";
	  }
	  else if (day == 6){
		day = "Saturday";
	}
	else {
		day = "Not a day"
	}
		document.getElementById("demo").innerHTML = day;
}

