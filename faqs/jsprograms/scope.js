carName1 = "benz";// variables declared outside the function is called global scope.
var carName2 = "eco";// variables declared outside the function is called global scope
let carName3 = "bmw";// variables declared outside the function is called global scope
function onLoad() {
    // this is block scope example.
    {
        x = 2; //block scope undclared number type variable.
        var y = 3;// block scope var type variable
        let z = 4;// block scope let type variable
        console.log("x=" + x);//we can acess block level undeclared variables inside the block.
        console.log("y=" + y);//we can acess block level var type variable inside the block.
        console.log("z=" + z);// we can acess block level let type variable inside the block.
        console.log("carName1=" + carName1);
        console.log("carName2=" + carName2);
        console.log("carName3=" + carName3);
    }
    console.log("x=" + x); //we can acess block level undeclared variables outside of the block.
    console.log("y=" + y); // we can acess block level var type variables outside of the block.
    console.log("z=" + z);// we cannot access let variable outside of the block.

    scopeFunction();

}
function scopeFunction() {
    var carName = "Volvo";
    console.log(typeof carName + " " + carName);
}
console.log(typeof carName + " " + carName);
//you cannot acceces the carName because the car name in the function scope.
//you will get an error  Uncaught ReferenceError: carName is not defined

console.log("I can display " + carName1);// this is global scope example
console.log("I can display " + carName2);//  this is global scope example.
console.log("I can display " + carName3);// this is globel scope example.

