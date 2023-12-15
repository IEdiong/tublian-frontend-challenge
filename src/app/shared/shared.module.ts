import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardNumberFormatPipe } from './pipes/credit-card-number-format.pipe';

@NgModule({
  declarations: [CreditCardNumberFormatPipe],
  exports: [CommonModule],
})
export class SharedModule {}
