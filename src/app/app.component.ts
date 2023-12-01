import { Component } from '@angular/core';
import { FormData } from 'src/types';

@Component({
  selector: 'tbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentStep = 1;
  title = 'ng-tublian';

  formData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userPlatformUsagePlan: 'team projects',
    chosenPaymentInterval: 'monthly',
    paymentPlan: 'pro',
  };
}
