import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/model/userArray';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
})
export class UserdashboardComponent implements OnInit {
  userArray: Array<IUser> = [
    {
      userName: 'rohan',
      LastName: 'harnale',
      birthdate: '12-3-1990',
      gender: 'male',
      previousTrek: 'pawana lake campaign',
      id: '123ert',
    },
    {
      userName: 'rohan',
      LastName: 'harnale',
      birthdate: '12-3-1990',
      gender: 'male',
      previousTrek: 'pawana lake campaign',
      id: '1ktu77',
    },
    {
      userName: 'rohan',
      LastName: 'harnale',
      birthdate: '12-3-1990',
      gender: 'male',
      previousTrek: 'pawana lake campaign',
      id: '1ryty577',
    },
    {
      userName: 'rohan',
      LastName: 'harnale',
      birthdate: '12-3-1990',
      gender: 'male',
      previousTrek: 'pawana lake campaign',
      id: '123rfg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
