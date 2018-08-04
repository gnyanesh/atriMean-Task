import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { addHardwareComponent } from './addhardware/addHardware.component';

import { AddgroupComponent } from './addgroup/addgroup.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { AuthGuard } from '../_guards/index';
import { SupporterComponent } from '../layout/supporter/supporter.component';


import { LoginComponent } from '../login/login.component';
import { hardwareDashboardComponent } from './hardwareDashboard/hardwareDashboard.component';
import { AddticketComponent } from './supporter/addticket/addticket.component';

const routes1: Routes = [
    
   
];

@NgModule({
    imports: [RouterModule.forChild(routes1)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
