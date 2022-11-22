import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountFormComponent } from './account-form/account-form.component';
import { AccountListComponent } from './account-list/account-list.component';

const routes: Routes = [
    {
        path: '',
        component: AccountListComponent,
    },
    {
        path: ':id',
        component: AccountFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule {}
