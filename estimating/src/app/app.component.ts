import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { Opponents } from './shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estimating';

  opponents: Opponents[] = [];

  nameInTextInput = "";

  constructor(private sharedDataSvc: SharedDataService) {}

  ngOnInit() {
    this.opponents = this.getOpponents();
  }

  //mockup some data
  getOpponents(): Opponents[] {

    this.opponents = [
      {
        name: 'Sherman'
      },
      {
        name: 'Tina'
      }
    ];

    console.log(this.opponents);
  
    return this.opponents
  }

  addOpponent() {

    const newOpponent = {
      name: this.nameInTextInput
    };

    this.opponents = [
      ...this.opponents,
      newOpponent
    ];
  }

  clearInputText() {
    this.nameInTextInput = ' ';
  }
}
