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
    { Place: 'pawana camp', availableTreks: 112 },
    {
      Place: 'pawana camp',
      availableTreks: 112,
    },
    {
      Place: 'pawana camp',
      availableTreks: 11,
    },
    {
      Place: 'pawana camp',
      availableTreks: 1,
    },
  ];

  ngOnInit(): void {}
}
