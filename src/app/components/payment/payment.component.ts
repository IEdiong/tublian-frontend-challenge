import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaymentInterval, PaymentPlan } from 'src/types';

@Component({
  selector: 'tbc-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  @Input({ required: true }) currentStep!: number;
  @Input({ required: true }) paymentIntervals!: PaymentInterval[];
  @Input({ required: true })
  paymentIntervalControl!: FormControl<PaymentInterval>;
  @Output() paymentPlanSelect: EventEmitter<PaymentPlan> = new EventEmitter();

  onPlanSelected(plan: PaymentPlan): void {
    this.paymentPlanSelect.emit(plan);
  }
}
