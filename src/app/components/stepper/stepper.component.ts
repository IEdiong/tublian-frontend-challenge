import { Component, Input } from '@angular/core';

@Component({
  selector: 'tbc-stepper',
  templateUrl: './stepper.component.html',
  styles: [],
})
export class StepperComponent {
  @Input() currentStep!: number;

  stepsTitle = [
    '1: Get Started',
    '2: Create Account',
    '3: Account Setup',
    '4: Payment',
  ];
}
