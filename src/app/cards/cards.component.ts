import { Component, OnInit } from '@angular/core';
import { Itrek } from '../shared/model/trekArray';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  trekArray: Array<Itrek> = [
    {
      userName: 'rohan',
      userId: '123errr',
      trek: 'pawana lake',
      price: 4000,
    },
    {
      userName: 'rohini',
      userId: '56rttt',
      trek: 'pawana lake',
      price: 4000,
    },
    {
      userName: 'ganesh',
      userId: 'hjshjh23',
      trek: 'pawana lake',
      price: 4000,
    },
    {
      userName: 'pallavi',
      userId: '112erb',
      trek: 'pawana lake',
      price: 4000,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(this.trekArray);
  }
}
