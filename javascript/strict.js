"use strict";// The "use strict" directive is only recognized at the beginning of a script or a function.
function onLoad() {
    strictFunction();
}
function strictFunction(){
    // The "use strict" directive is only recognized at the beginning of a script or a function.
    x = 5;
    console.log(x);// Uncaught ReferenceError: x is not defined. becauese x is not declared.
    function y(p1,p1){
    console.log(y);//Duplicate parameter name not allowed in this context.
    }
}