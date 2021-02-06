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

  constructor() { }
}
