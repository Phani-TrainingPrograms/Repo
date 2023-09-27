import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  title : string ="Reactive Forms Demo"
  empForm : FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.min(100), Validators.max(200)]),
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),  
    address: new FormControl("", [Validators.required, Validators.minLength(5)]),  
    emailAddress: new FormControl("", [Validators.required, Validators.email]),  
    salary: new FormControl(0.0, [Validators.required, Validators.min(30000), Validators.max(100000)]),  
  });

  get id(){
    return this.empForm.get("id");
  }

  get name(){
    return this.empForm.get("name");
  }

  get address(){
    return this.empForm.get("address");
  }

  get emailAddress(){
    return this.empForm.get("emailAddress");
  }

  get salary(){
    return this.empForm.get("salary");
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
   console.log(this.empForm.value) 
  }
}
