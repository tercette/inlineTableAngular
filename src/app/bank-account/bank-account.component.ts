import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {

  bankAccountForms : FormArray = this.fb.array([])

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addBankAccountForm();
   }

  addBankAccountForm(){
    this.bankAccountForms.push(this.fb.group({
      bankAccountId : [''],
      accountNumber : [''],
      accountHolder : [''],
      bankID : [0],
      IFSC : ['']
    }));
  }

}
