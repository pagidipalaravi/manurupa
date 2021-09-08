/*
JavaScript Scope

Scope determines the accessibility (visibility) of variables.
JavaScript has 3 types of scope:
	Block scope
	Function scope
	Global scope
Block Scope
	Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
	ES6 introduced two important new JavaScript keywords: let and const.
	These two keywords provide Block Scope in JavaScript.
	Variables declared inside a { } block cannot be accessed from outside the block:
*/
function onLoad() {
    hoistingFunction();
}
function hoistingFunction(){
    x = 5; // initilize x
    console.log(x);
    var x;// variable declarations moveing to the top.
//javascript hoist declarations only not in initilizations.
    var y = 6;//initilize y
    var z = 7;//initilize z
    console.log(x + " " + y);// display y and z 

    var a = 1;// initilize a
     console.log(a + " " + b);// display a and b
    var b = 2;  // initilize b but declaration is not in top that why b value is undefined.

}