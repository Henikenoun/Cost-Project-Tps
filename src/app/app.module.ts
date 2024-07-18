import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CodeInputModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
