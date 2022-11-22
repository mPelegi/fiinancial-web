import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Material
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [MatButtonModule, FontAwesomeModule, RouterModule],
})
export class SharedModule {}
