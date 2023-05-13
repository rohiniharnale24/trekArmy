import { Component, OnInit } from '@angular/core';
import { Iuser } from '../shared/model/userArray';
import { UserArrayService } from '../user-array.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private _userInstance: UserArrayService) {}

  ngOnInit(): void {}
  onUserSignIn(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    address: HTMLInputElement,
    city: HTMLInputElement
  ) {
    let obj: Iuser = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      password: password.value,
      address: address.value,
      city: city.value,
    };
    this._userInstance.addUser(obj);
    fname.value = '';
    lname.value = '';
    email.value = '';
    password.value = '';
    address.value = '';
    city.value = '';
  }
}
