import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() {
    console.log("constructor");
   }
ngOnChanges(): void{
  console.log("changes")
}
  ngOnInit(): void {
    console.log("ngOnInit")
  }
 
  @Input() item: any;
  
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

}
