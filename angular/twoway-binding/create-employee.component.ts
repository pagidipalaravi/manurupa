import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeBean } from '../../bean/EmployeeBean';
import { DepartmentBean } from '../../bean/DepartmentBean';
import { JobBean } from '../../bean/JobBean';
import { EmployeeService } from '../../service/EmployeeService';
import { DepartmentService } from '../../service/DepartmentService';
import { JobService } from '../../service/JobService';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild(' ', { static: false })
  createEmployeeForm: NgForm;

  firstName: string = "";
  lastName: string = "";
  email: string = 'John.due@gmail.com';
  phoneNumber: string = "";
  genders: string[] = ['male', 'female'];
  hireDate = new Date();
  salary: number =0;
  jobId: string = "";
  departmentId: number = 0;
  managerId: number = 0;
  employeeBean: EmployeeBean= new EmployeeBean(0, "Ravi", "Kumar", "ravi.kumar@gamil.com", "515.123.4567", new Date("2021-08-07"), 1000, "AD_VP", 100, 90);
  departmentBean: DepartmentBean= new DepartmentBean(0,"", 0, 0);
  jobBean: JobBean= new JobBean("","",0,0);
  departments: any;
  jobs: any;
  managers: any;
  error: boolean = false;
  message: string = "";
  constructor(private employeeService: EmployeeService, private departmentService : DepartmentService,private jobService: JobService) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getJobs();
    this.getManagers();
  }
  getDepartments(){
    this.departmentService.getDepartments().subscribe(
      data => { 
        if(data.status===200){
          this.departments= data.result;
          console.log(this.departments);
        }
  
      },
      error =>{
        this.message= error.message;
        console.error(error);

      });
    }
  getJobs(){
    this.jobService.getJobs().subscribe(
      data => {
        if(data.status===200){
          this.jobs= data.result;
          console.log(this.jobs);
        }
      },
      error =>{
        this.message=error.message;
        console.error(error);
      }
    );
  }
  getManagers(){
    this.managers = [{managerId:100,managerName:'Steven'},
    {managerId:102,managerName:'Lex'},
    {managerId:103,managerName:'Alexander'},
    {managerId:108,managerName:'Nancy'},
    {managerId:114,managerName:'Den'}];
  }

  onSubmit() {
    this.employeeBean.firstName = this.createEmployeeForm.value.firstName;
    this.employeeBean.lastName = this.createEmployeeForm.value.createEmployeeGroup.lastName;
    this.employeeBean.email = this.createEmployeeForm.value.createEmployeeGroup.email;
    this.employeeBean.phoneNumber = this.createEmployeeForm.value.createEmployeeGroup.phoneNumber;
    this.employeeBean.hireDate = this.createEmployeeForm.value.createEmployeeGroup.hireDate;
    this.employeeBean.salary = this.createEmployeeForm.value.createEmployeeGroup.salary;
    this.employeeBean.jobId = this.createEmployeeForm.value.createEmployeeGroup.jobId;
    this.employeeBean.managerId = this.createEmployeeForm.value.createEmployeeGroup.managerId;
    this.employeeBean.departmentId = this.createEmployeeForm.value.createEmployeeGroup.departmentId;
    this.employeeService.createEmployee(this.employeeBean).subscribe(
      data => {
        //TO DO need to implement is loading functionality.
        if (data.status === 200) {
          // this is custom handling errors
          this.error = false;
          this.message = data.message;
        }
        else {
          this.error = true;
          this.message = data.message;
        }
      }, 
      error => {
      //TO DO need to implement default error handling here.
      this.message = error.message;
      console.error(error);
      }
      );
  }
}
