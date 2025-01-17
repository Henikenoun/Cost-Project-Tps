import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {

  message: string ="";
  isOkey:boolean = true;
  submitted:boolean=false;

  constructor(
    private  router:Router,
    private authService:AuthenticationService

  ) {
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(["login"]);
  }

  private confirmAccount(token: string) {
    this.authService.confirm(
      {token}
    ).subscribe({
      next : () => {
        this.message = 'your account has been successfuly activated. \n Now you can proceed to login';
        this.submitted = true;
      },
      error :() => {
        this.message = 'Token has been expired or invalid'
        this.submitted = true;
        this.isOkey = false;
    }
    })
  }
}
