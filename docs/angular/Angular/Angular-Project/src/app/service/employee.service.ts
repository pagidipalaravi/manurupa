import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private  http: HttpClient) { }
  
  getEmployee(){
    return  this.http.get("assets/getEmployee.json");
  }
}
