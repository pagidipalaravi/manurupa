function Object1(){
	let person = {firstName:"Chakri",
				  lastName:"vemavarapu",
				  salary:50000, 
				  eyeColor:"brown"
				 };
				document.getElementById("demo").innerHTML = "firstName:"+person.firstName + " <br> " +"lastName:"+ person.lastName + "<br>"+"Salary:"+person.salary+ "<br> "+"eyeColor:"+person.eyeColor;
				document.getElementById("demo").style.color="blue";
				document.getElementById("demo").style.fontSize="20px";
			  }	
			  
function newobject(){
	
	let emp=new Object();  
			emp.id=101;  
			emp.name="Brahmmam Bubattula";  
			emp.salary=30000;  
			document.getElementById("demo1").innerHTML = "Id:"+emp.id+"<br> "+"Name:"+emp.name+"<br> "+"Salary:"+emp.salary;
			document.getElementById("demo1").style.color="green";
	        document.getElementById("demo1").style.fontSize="20px";
}
function conobject(){
		
function emp(id,name,salary){  
		this.id=id;  
		this.name=name;  
		this.salary=salary;  
		}  
		let e=new emp(103,"Raja kalluri",70000);  
		document.getElementById("demo2").innerHTML = "Id:"+e.id+"<br> "+"Name:"+e.name+"<br> "+"Salary:"+e.salary;
		document.getElementById("demo2").style.color="orange";
	    document.getElementById("demo2").style.fontSize="20px";
}
}
const number = [23,5,52,34,56];
const sum = number.reduce(Function1);
console.log(sum);
function Function1(total,value){
	return total+value;	
}
