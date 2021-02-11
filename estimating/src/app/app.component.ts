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

  opponentName = "";

  addedOpponentName = "";

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

  addOpponent(opponentToAdd: string) {

    const newOpponent = {
      name: opponentToAdd
    };

    this.opponents = [
      ...this.opponents,
      newOpponent
    ];
  }

  clearInputText() {
    this.addedOpponentName = ' ';
  }

  setOpponentName(opponentName: string) {
    this.opponentName = opponentName;
  }
}
