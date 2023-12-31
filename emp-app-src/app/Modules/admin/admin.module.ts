import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from 'src/app/Components/dashboard/dashboard.component';
import { RightsComponent } from 'src/app/Components/rights/rights.component';
import { UserComponent } from 'src/app/Components/user/user.component';


//Every module in angular will have declarations(For components), imports(For importing modules), exports(For exporting modules), providers(For injectors->Services)
@NgModule({
  declarations: [
    DashboardComponent, RightsComponent, UserComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  providers:[],
  exports: []
})

export class AdminModule { }
