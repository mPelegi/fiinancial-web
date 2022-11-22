import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [AccountListComponent, AccountFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    SharedModule,
  ],
})
export class AccountModule {}
