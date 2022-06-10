function onLoad() {
	console.log("onLoad function");
}
$(document).ready(function(){
	console.log("jquery ready function");
});

(function(){ 
	console.log("This is IIFE function");
	}
)()