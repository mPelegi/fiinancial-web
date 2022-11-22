import { Account, AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  displayedColumns: string[] = ['type', 'value', 'openingDate', 'dueDate', 'payday', 'status'];
  dataSource: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts()
    .subscribe(response => {
      this.dataSource = response;
      console.log('teste: ', response)
    })
  }

}
