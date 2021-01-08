import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(
    private _loginService: LoginService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.setLoginForm();
  }

  setLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    this._loginService.submitLogin(this.loginForm.value)
      .subscribe(
        data => {
          this.toastr.success('User Succesfully Logged In', 'Logged In');
          sessionStorage.setItem('User', JSON.stringify(data.data));
          sessionStorage.setItem('Token', data.token);
          this.router.navigate(['home']);
        },
        err => {
          this.toastr.error('Your email or password is incorrect', 'Invalid Data');
        }
      );
  }

}
