function test(){
    var firstname=document.getElementById("firstname").value;
    var size=firstname.length;
    if(size<=10 ||size>=30){
        if(size<=10){
            document.getElementById("err").innerHTML="please give more than 10 characters";
        }
        if(size>=30){
            document.getElementById("err").innerHTML="please give less than 30 characters";
        }
    }
    else{
        document.getElementById("err").innerHTML="";
    }
}
    function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
