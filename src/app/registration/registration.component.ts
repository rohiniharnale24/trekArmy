import { Component, OnInit } from '@angular/core';
import { UserArrayService } from '../user-array.service';
import { Iuser } from '../shared/model/userArray';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // userArray: Array<Iuser> = [];
  constructor(private _userInstance: UserArrayService) {}
  ngOnInit(): void {
    // this.userArray = this._userInstance.userArray;
  }
  registeruser(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    address: HTMLInputElement,
    city: HTMLInputElement
  ) {
    let obj = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      password: password.value,
      address: address.value,
      city: city.value,
    };
    console.log(obj);
    this._userInstance.addUser(obj);
    fname.value = '';
    lname.value = '';
    email.value = '';
    password.value = '';
    address.value = '';
    city.value = '';
  }
}
