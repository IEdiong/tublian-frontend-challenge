import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    StepperComponent,
    PaymentModalComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
