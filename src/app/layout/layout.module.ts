import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidenavComponent,
    DashboardComponent,
    ApprovalsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialUIModule,
    ReactiveFormsModule, 
    SharedModule
  ]
})
export class LayoutModule { }
