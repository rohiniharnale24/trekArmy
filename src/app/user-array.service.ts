import { Injectable } from '@angular/core';
import { Iuser } from './shared/model/userArray';
import { IloginUser } from './shared/model/loginuserArray';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserArrayService {
  userArray: Array<Iuser> = [
    {
      fname: 'rohan',
      lname: 'harnale',
      email: 'harnale@gmail.com',
      password: 234444,
      address: 'pune, dist pune',
      city: 'pune',
    },
  ];
  addUser(userobj: Iuser) {
    this.userArray.push(userobj);
    console.log(this.userArray);
    // let newArray = this.userArray;
    localStorage.setItem(userobj.email, JSON.stringify(userobj));
    // let data =  JSON.parse(localStorage.getItem("newuser"))
  }

  //  JSON.parse(getItem("newuser"))
  //check email is present in ls or not

  constructor() {}
}
