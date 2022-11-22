import { AccountService } from './../account.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      type: [null, [Validators.required]],
      value: [null, [Validators.required]],
      openingDate: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      payday: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }

  save() {
    const valueForm = this.formGroup.value;
    const id = Math.random();
    this.accountService.create({...valueForm, status: 'Aguardando', id })
    .subscribe(resp => {
      this.router.navigate(['/main/account'])
    });
  }
}
