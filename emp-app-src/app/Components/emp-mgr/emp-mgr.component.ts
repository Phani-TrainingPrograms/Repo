import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-emp-mgr',
  templateUrl: './emp-mgr.component.html',
  styleUrls: ['./emp-mgr.component.css']
})
export class EmpMgrComponent implements OnInit {
  isLoading: boolean = false;
  empList: Employee[] = [] ;//data of the Component. 
  constructor(private empService : EmployeeService) { } //Dependency Injection of Angular where U insert(inject) the required objects for UR component to work.. 

  //Observable objects have a method called Subscribe that will take a callback function as arg. This function will be called after the observable object is returned.(Function has completed its operation). 
  ngOnInit(): void {
   this.getAllEmployeesFromServer();
  }

  //Helper function that is called to load the data fresh...
  public getAllEmployeesFromServer(){
    this.isLoading = true;
    this.empService.getAllEmployees().subscribe((data: Employee[])=>{
      this.empList = data;
      this.isLoading = false;
    })
  }

  public onDelete(id : any){
    this.isLoading = true;
    this.empService.deleteEmployee(id).subscribe((data)=>{
      alert("Employee deleted!")
      this.getAllEmployeesFromServer();
      this.isLoading = false;
    })
  }
}
