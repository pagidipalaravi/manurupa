/*

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