import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:3000/accounts');
  }

  create(account: Account): Observable<any> {
    return this.http.post<any>('http://localhost:3000/accounts', account);
  }
}

export interface Account {
  id: number;
  type: string;
  value: number;
  openingDate: Date;
  dueDate: Date;
  payday: Date;
  status: string;
}
