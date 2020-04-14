import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  form = {
    email: null,
    password: null
  };

  constructor(private _userService: UserService, private router: Router) { }

  logIn(){
    console.log (this.form)
    this._userService.login(this.form).subscribe( (res: any) => {
      console.log('userres', res);
      sessionStorage.setItem('token', res.id);
      sessionStorage.setItem('userId', res.userId);
      this._userService.isLoggedIn = true;
      this.goToDash();
    })
  }

  goToDash(){
    this.router.navigate(['/']);
  }

}
