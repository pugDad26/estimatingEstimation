import { Injectable } from '@angular/core';

export interface Opponents {
  name: string;
}

export interface Games {
  opponent: string,
  won: boolean,
  lost: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  checkersOpponents: Opponents[] = [];

  constructor() { }

  //mockup some data
  getOpponents(): Opponents[] {

    this.checkersOpponents = [
      {
        name: 'Sherman'
      },
      {
        name: 'Tina'
      }
    ];

    return this.checkersOpponents
  }

  updateOpponentList = (opponentToAdd: string) => {

    // this.checkersOpponents.push(opponentToAdd);
    // // // //const updatedList = opponents.map(x => ({
    // // //     ...x,
    // // //     opponentToAdd //was adding the object as a property to the existing objects
    // //        couldn't get to work
    // // }));
    // return this.checkersOpponents

    const newOpponent = {
      name: opponentToAdd
    };

    this.checkersOpponents = [
      ...this.checkersOpponents,
      newOpponent
    ];
  }
}