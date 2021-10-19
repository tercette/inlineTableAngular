import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';

<<<<<<< HEAD
=======

>>>>>>> 97421a1a8b42628a574c0b4638d895a8d6b98dd7
@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
