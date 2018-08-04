import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';


import { SupporterComponent } from './layout/supporter/supporter.component';
import { addHardwareComponent } from './layout/addhardware/addHardware.component';

import { AddgroupComponent } from './layout/addgroup/addgroup.component';




import { hardwareDashboardComponent } from './layout/hardwareDashboard/hardwareDashboard.component';


import { AddaccountComponent } from './layout/addaccount/addaccount.component';
import { ActiveticketComponent } from './layout/activeticket/activeticket.component';




import { AdminticketsComponent } from './layout/admintickets/admintickets.component';


const appRoutes: Routes = [
    //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    
    // otherwise redirect to home
    { path: 'layout',   component: LayoutComponent,  canActivate: [AuthGuard]},
    { path: 'layout',   component: LayoutComponent,  canActivate: [AuthGuard]},
    {
        path: 'layout',
        component: LayoutComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           
            { path: 'dashboard', component: HomeComponent,canActivate: [AuthGuard] },
            
            
        ]
    },


     
    
   

















    { path: 'Supporter', component: SupporterComponent, canActivate: [AuthGuard]},
    {
        path: '',
        component: SupporterComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           { path: 'addsupticket', component: addHardwareComponent, canActivate: [AuthGuard]},
           { path: 'suptickets', component: hardwareDashboardComponent, canActivate: [AuthGuard]},
           { path: 'supdashboard', component: hardwareDashboardComponent, canActivate: [AuthGuard]},
           { path: 'supmsg', component: hardwareDashboardComponent, canActivate: [AuthGuard]},
           { path: 'supreports', component: hardwareDashboardComponent, canActivate: [AuthGuard]},
           
           { path: 'supporteractive', component: ActiveticketComponent, canActivate: [AuthGuard]},


           
        ]   
    },
            
    { path: 'Administrator',   component: LayoutComponent,  canActivate: [AuthGuard]},
   
    {
        path: '',
        component: LayoutComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           { path: 'hardwareDashboard', component:AdminticketsComponent,canActivate: [AuthGuard] },
            { path: 'dashboard', component:hardwareDashboardComponent,canActivate: [AuthGuard] },
            { path: 'addHardware', component: addHardwareComponent, canActivate: [AuthGuard]},
            
           
            { path: 'assignHardware', component: AddgroupComponent,canActivate: [AuthGuard] },
            { path: 'addaccount',component:AddaccountComponent,canActivate: [AuthGuard]},
            { path: 'adminactive',component:ActiveticketComponent,canActivate: [AuthGuard]},
            
            
            
            
            
            
            { path: 'Administrator/dashboard', component:hardwareDashboardComponent,canActivate: [AuthGuard] },
            { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
        ]
    },
    
];

export const routing = RouterModule.forRoot(appRoutes);