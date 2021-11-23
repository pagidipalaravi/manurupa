import { Component, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employee:EmployeeService) {
    console.log("constructor");
   }
ngOnChanges(): void{
  console.log("changes")
}
  ngOnInit(): void {
    console.log("ngOnInit");;
    this.viewEmployee();
  }
 
  @Input() item: any;
  viewEmployees:any;
  firstName:String = "Harika";
  lastName:String = "Valikala";
  gender:String = "F";
  age:Number = 26;
  myColspan=3;
  isApplied= true;
  show=true;
  myFunction() {
    console.log("Event Binding Occur");
  }
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];
// Service Funtion
  viewEmployee(){
    this.employee.getEmployee().subscribe(data => {
      this.viewEmployees =data;
      console.log(this.viewEmployees);
    })
  }
}
