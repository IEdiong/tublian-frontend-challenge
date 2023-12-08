import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    StepperComponent,
    PaymentModalComponent,
    GetStartedComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TextInputComponent,
    EmailInputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
