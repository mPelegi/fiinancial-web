import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    SharedModule,
    RouterModule
  ]
})
export class MainModule { }
