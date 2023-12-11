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
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { AccountSetupComponent } from './components/account-setup/account-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    StepperComponent,
    PaymentModalComponent,
    GetStartedComponent,
    CreateAccountComponent,
    RadioGroupComponent,
    AccountSetupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TextInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
