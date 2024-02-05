import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PaymentInterval, PaymentMethod, PaymentPlan } from 'src/types';

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
  paymentDetails!: FormGroup;
  isPaymentSuccess = false;

  get email(): FormControl {
    return this.paymentDetails.get('email') as FormControl;
  }

  get cardHolder(): FormControl {
    return this.paymentDetails.get('cardHolder') as FormControl;
  }

  get cardNumber(): FormControl {
    return this.paymentDetails.get('cardNumber') as FormControl;
  }

  get expiryDate(): FormControl {
    return this.paymentDetails.get('expiryDate') as FormControl;
  }

  get cvv(): FormControl {
    return this.paymentDetails.get('cvv') as FormControl;
  }

  get country(): FormControl {
    return this.paymentDetails.get('country') as FormControl;
  }

  get paymentMethod(): FormControl<PaymentMethod> {
    return this.paymentDetails.get(
      'paymentMethod',
    ) as FormControl<PaymentMethod>;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.plan === 'business') {
      this.price = 49.99;
    } else {
      this.price = 19.99;
    }

    this.paymentDetails = this.fb.nonNullable.group({
      paymentMethod: this.fb.control<PaymentMethod>(
        'credit-card',
        Validators.required,
      ),
      email: ['', [Validators.required, Validators.email]],
      cardHolder: ['', Validators.required],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(16),
        ],
      ],
      expiryDate: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      cvv: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
      country: ['', Validators.required],
    });

    document.documentElement.scrollTop = 0;
  }

  onModalClose(): void {
    this.closeModal.emit();
  }

  onSubmit(): void {
    if (this.paymentDetails.valid) {
      console.log(this.paymentDetails.value);
      this.isPaymentSuccess = true;
    } else {
      this.paymentDetails.markAllAsTouched();
    }

    document.documentElement.scrollTop = 0;
  }
}
