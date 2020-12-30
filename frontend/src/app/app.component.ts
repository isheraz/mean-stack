import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private router: Router,
    private toastr: ToastrService) { }

  title = 'frontend';

  loggedIn() {
    return sessionStorage.getItem('User');
  }

  logOut(){
    sessionStorage.removeItem("User");
    sessionStorage.removeItem("Token");
    this.toastr.success('User Logged out Successfully!');
    this.router.navigate(['login']);
  }

}
