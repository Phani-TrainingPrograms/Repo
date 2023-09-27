import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  //Template driven forms are the easiest way of performing validations to the data. It uses ngModel to perform the 2way binding and internally loads form controls into the angular environment to validate the content. The data validation happens thru attributes provided by HTML forms. 
  emp : Employee = {} as Employee;
  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
    this.emp = {
      address : "", name: "", emailAddress : "", salary :0, id:0, empPic :  ""
    }
  }

  onSubmit(empForm : any){
    console.log(empForm.value);//we are not doing anything , only to validate the Form data
  
  }
}
