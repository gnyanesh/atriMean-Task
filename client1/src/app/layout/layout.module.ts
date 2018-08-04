import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SupporterComponent } from './supporter/supporter.component';


import { SidebarSupporterComponent } from '../layout/components/sidebar_supporter/sidebar_supporter.component';
import { HeaderoneComponent } from '../layout/components/headerone/headerone.component';




import { hardwareDashboardComponent } from './hardwareDashboard/hardwareDashboard.component';


import { AddticketComponent } from './supporter/addticket/addticket.component';
import { ActiveticketComponent } from './activeticket/activeticket.component';




import { Chart } from 'angular-highcharts';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';




@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        ChartsModule,
        ChartModule,
        FormsModule,
       
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SupporterComponent,SidebarComponent, HeaderComponent,  SidebarSupporterComponent, HeaderoneComponent, hardwareDashboardComponent, AddticketComponent, ActiveticketComponent]
})
export class LayoutModule {}
