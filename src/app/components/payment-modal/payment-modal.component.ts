import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentInterval, PaymentPlan } from 'src/types';

@Component({
  selector: 'tbc-payment-modal',
  templateUrl: './payment-modal.component.html',
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 106px;
      }
    `,
  ],
})
export class PaymentModalComponent implements OnInit {
  @Input({ required: true }) paymentInterval!: PaymentInterval;
  @Input({ required: true }) plan!: PaymentPlan;
  @Output() closeModal = new EventEmitter<void>();
  price!: number;

  ngOnInit(): void {
    if (this.plan === 'business') {
      this.price = 49.99;
    } else {
      this.price = 19.99;
    }
  }

  onModalClose(): void {
    this.closeModal.emit();
  }
}
