import { Component, EventEmitter, Output } from '@angular/core';

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
export class PaymentModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  onModalClose(): void {
    this.closeModal.emit();
  }
}
