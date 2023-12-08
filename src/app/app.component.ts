import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      }),
    });
  }

  get email() {
    return this.onboardingForm.get(['account', 'email']) as FormControl<string>;
  }

  goToNextStep(isValidStep: boolean): void {
    if (isValidStep) {
      if (this.currentStep === 1) {
        this.userName = `${this.onboardingForm.value?.name?.firstName} ${this.onboardingForm.value?.name?.lastName}`;
      }
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
