import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from 'src/types';

@Component({
  selector: 'tbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentStep = 4;
  title = 'ng-tublian';
  onboardingForm!: FormGroup;

  formData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userPlatformUsagePlan: 'team projects',
    chosenPaymentInterval: 'monthly',
    paymentPlan: 'pro',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.onboardingForm = this.fb.nonNullable.group({
      name: this.fb.nonNullable.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
    });
  }

  goToNextStep(): void {
    this.currentStep++;
  }
}
