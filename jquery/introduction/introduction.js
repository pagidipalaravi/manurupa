function bulbOn() {
	document.getElementById('p1').innerHTML='This is Bulb ON';
	document.getElementById('myImage').src = 'pic_bulbon.gif';
	document.getElementById('p1').style.color = 'yellow';
	document.getElementById('p2').style.display = 'block';
	document.getElementById('p3').style.visibility = 'visible';
}

function bulbOff() {
	document.getElementById('p1').innerHTML='This is Bulb OFF';
	document.getElementById('myImage').src = 'pic_bulboff.gif';
	document.getElementById('p1').style.color = 'black';
	document.getElementById('p2').style.display = 'none';
	document.getElementById('p3').style.visibility = 'hidden';
}

function bulbOn1() {
	$("#p1").text("This is Bulb ON");
	$("#myImage").attr("src", "pic_bulbon.gif");
	$("#p1").css("color", "yellow");
	$("#p2").show();
	$("#p3").show();
	$("#p1").append("This is appended text");
}
function bulbOff1() {
	$("#p1").text("This is Bulb OFF");
	$("#myImage").attr("src", "pic_bulboff.gif");
	$("#p1").css("color", "black");
	$("#p2").hide();
	$("#p3").hide();
	$("#p1").append("This is appended text");
}