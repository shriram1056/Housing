import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties = [
    {
      Id: 1,
      Name: 'Birla',
      Type: 'house',
      Prince: 12000,
    },
    {
      Id: 2,
      Name: 'Eros',
      Type: 'house',
      Prince: 12000,
    },
    {
      Id: 3,
      Name: 'Doshi',
      Type: 'house',
      Prince: 12000,
    },
    {
      Id: 4,
      Name: 'VGP group',
      Type: 'house',
      Prince: 12000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
