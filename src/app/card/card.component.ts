import { Component, Input, OnInit } from '@angular/core';
import { Itrek } from '../shared/model/trekArray';
// import{Itrek} from

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // @Input() trek= {
  //  availableTreks:112,

  // };
  constructor() {}
  trekArray = [
    { Place: 'Pawana camping', availableTreks: 112 },
    {
      Place: 'Rajmachi camping',
      availableTreks: 1,
    },
    {
      Place: 'Ratangad trek',
      availableTreks: 11,
    },
    {
      Place: 'Aadrai jungle trek',
      availableTreks: 10,
    },
  ];

  ngOnInit(): void {}
}
