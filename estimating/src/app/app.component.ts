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

  name = "";

  constructor(public sharedDataSvc: SharedDataService) {}

  ngOnInit() {
    this.opponents = this.sharedDataSvc.getOpponents();

    this.sharedDataSvc.updateOpponentList(this.name);
  }
}
