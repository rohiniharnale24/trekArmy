import { Injectable } from '@angular/core';
import { Iuser } from './shared/model/userArray';
import { IloginUser } from './shared/model/loginuserArray';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private _router: Router) {}
  addUser(userobj: Iuser) {
    this.userArray.push(userobj);

    console.log('userArray', this.userArray);
    // let newArray = this.userArray;

    localStorage.setItem(userobj.email, JSON.stringify(userobj));
    // let data =  JSON.parse(localStorage.getItem("newuser"))
  }

  //  JSON.parse(getItem("newuser"))
  //check email is present in ls or not
  loginUser(userObj: IloginUser) {
    let getuser = JSON.parse(localStorage.getItem(userObj.email)!);
    if (!getuser) {
      alert('this email is not present');
    } else {
      if (userObj.password === getuser.password) {
        console.log('user is present');
        this._router.navigateByUrl(
          'src/app/user-profile/user-profile.component.html'
        );
      } else {
        alert('please check your password');
      }
    }
  }
}
