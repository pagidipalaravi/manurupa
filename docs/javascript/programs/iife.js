// Regular Function.   
function hello()   
{   
    console.log("Regular function");   
};   
// Regular Function execution.   
hello();   
    
// IIFE creation and execution.   
(function() { console.log("Immediately Invoked Function Expression"); })();  

(function (x, y, z) {  
   console.log(x);  
   console.log(y);  
   console.log(z);  
 })(100, 200, 300);  