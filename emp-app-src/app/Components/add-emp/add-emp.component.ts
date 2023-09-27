import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  empObj : Employee = {} as Employee;
  url : any;
  constructor(private empService : EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onEmpSubmit(){

    this.empService.createEmployee(this.empObj).subscribe((data)=>{
      alert("Employee Added to the database");
      this.router.navigate(['/']);//Redirects to the Main Page of the App. In our case, the emp Manager component. 
    })
  }

  onFileChange(event: any){
    if(event.target.files && event.target.files.length){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) =>{
        this.url = reader.result;
        this.empObj.empPic = this.url;
      }
    }
  }
}
