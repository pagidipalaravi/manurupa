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

function openDoor() {
	// Write a logic to open the door
}