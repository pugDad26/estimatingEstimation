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

  opponentChosen = "";

  nameInTextInput = "";

  opponents: Opponents[] = [];

  constructor(private sharedDataSvc: SharedDataService) {}

  ngOnInit() {
    this.opponents = this.getOpponents();
  }

  //mockup some data
  getOpponents(): Opponents[] {

    this.opponents = [
      {
        name: 'Sherman',
        isChecked: false
      },
      {
        name: 'Tina',
        isChecked: false
      }
    ];

    console.log(this.opponents);
  
    return this.opponents
  }

  addOpponent() {

    const newOpponent = {
      name: this.nameInTextInput,
      isChecked: false
    };

    this.opponents = [
      ...this.opponents,
      newOpponent
    ];
  }

  clearInputText() {
    this.nameInTextInput = ' ';
  }

  setOpponentChosen(foeChosen:string) {
    this.opponentChosen = foeChosen;
    console.log(this.opponentChosen);
  }
}
