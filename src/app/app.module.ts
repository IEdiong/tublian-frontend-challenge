import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    StepperComponent,
    PaymentModalComponent,
    GetStartedComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
