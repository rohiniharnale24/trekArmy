import { Component, OnInit } from '@angular/core';
import { UserArrayService } from '../user-array.service';
import { IloginUser } from '../shared/model/loginuserArray';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {
  constructor(private _userInstance: UserArrayService) {}

  ngOnInit(): void {}
  onLogin(email: HTMLInputElement, password: HTMLInputElement) {
    console.log('in onlogin');
    let obj: IloginUser = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);

    this._userInstance.loginUser(obj);
  }
}
