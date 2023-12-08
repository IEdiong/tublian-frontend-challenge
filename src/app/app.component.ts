import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from 'src/types';

@Component({
  selector: 'tbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentStep = 1;
  title = 'ng-tublian';
  onboardingForm!: FormGroup;
  isModalOpen = true;
  userName = '';

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
      account: this.fb.nonNullable.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      }),
    });
  }

  get firstName() {
    return this.onboardingForm.get(['name', 'firstName']);
  }

  goToNextStep(isValidStep: boolean): void {
    if (isValidStep) {
      this.userName = `${this.onboardingForm.value?.name?.firstName} ${this.onboardingForm.value?.name?.lastName}`;
      this.currentStep++;
    } else {
      // TODO: set form error to true
    }

    console.log(this.onboardingForm.value);
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
