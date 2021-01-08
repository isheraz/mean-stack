import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { RegisterService } from 'src/app/services/RegisterService/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerationForm:any;
  Roles:any = [];

  constructor(
     private _registerService: RegisterService,
     private fb:FormBuilder,
     private toastr:ToastrService,
     private router: Router,
     private http: HttpClient) { }

  ngOnInit(): void {
    this.getRoles();
    this.setRegisterForm();
  }

  getRoles(): void {
    this.http.get<any>(environment.backendRoute + '/role') .subscribe(
     data => {
       this.Roles = data.data;
     },
     err => {
       console.log(err);
     },
   );
 }

  setRegisterForm(): void {
    this.registerationForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required , Validators.minLength(6)]],
      role: ['',[]],
    });
  }

  register(): void {
    this._registerService.submitRegister(this.registerationForm.value)
          .subscribe(
            data => {
              this.toastr.success('User Successfully Registered!' , 'Registered');
              localStorage.setItem('User' , JSON.stringify(data.data));
              this.router.navigate(['login']);
            },
            err => {
             this.toastr.error('Invalid Data', 'Failed');
            }
        );
    }
}
