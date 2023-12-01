import { Component } from '@angular/core';

@Component({
  selector: 'tbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStep = 1;
  title = 'ng-tublian';
}
