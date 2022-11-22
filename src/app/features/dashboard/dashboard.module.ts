import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashabordRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashabordRoutingModule,
    MatCardModule
  ]
})
export class DashboardModule { }
