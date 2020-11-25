import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  login() {
    console.log(this.email);
    console.log(this.password);
    this.authService.SignIn(this.email, this.password);
  }

  logout(){
    this.authService.SignOut();
  }

  ngOnInit(): void {
  }

}
