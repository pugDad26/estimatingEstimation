import { Component } from '@angular/core';
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

  constructor(private sharedDataSvc: SharedDataService) {

    // Get opponents
    this.opponents = this.sharedDataSvc.fetchQuizzes();
  }
}
