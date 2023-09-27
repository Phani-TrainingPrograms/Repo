import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './Components/add-emp/add-emp.component';
import { EditEmpComponent } from './Components/edit-emp/edit-emp.component';
import { EmpMgrComponent } from './Components/emp-mgr/emp-mgr.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { TemplateComponent } from './Components/template/template.component';
import { ViewEmpComponent } from './Components/view-emp/view-emp.component';

const routes: Routes = [
  {path: '', redirectTo: "employees/admin", pathMatch:'full'},
  {path: "employees/admin", component:EmpMgrComponent},
  {path: "employees/edit/:id", component:EditEmpComponent},
  {path: "employees/view/:id", component:ViewEmpComponent},
  {path: "employees/add", component:AddEmpComponent},
  {path: "template", component:TemplateComponent},
  {path: "ReactiveForm", component: ReactiveFormComponent},
  {path: 'admin', loadChildren: ()=> import("./Modules/admin/admin.module").then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
