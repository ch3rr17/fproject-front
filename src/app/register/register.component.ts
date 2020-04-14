import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


 form = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

  constructor(private _userService: UserService, private router: Router) { }


  signUp() {
    this._userService.registerUser(this.form).subscribe( (res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      this.goToDash();
    });
  }

  goToDash(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
