import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/services/auth-guard.service';
import { exampleClientData } from 'src/environments/environment';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private authGuard: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
    
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
  }

  onSubmit() {
    if (this.email.value === exampleClientData.email
       &&
       this.password.value === exampleClientData.password) {
         this.authGuard.auth = true;
         this.router.navigate(['map']);
       } else {
        //  this.authGuard.auth = false;
       }
  }
}
