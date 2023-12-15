import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardNumberFormat',
})
export class CreditCardNumberFormatPipe implements PipeTransform {
  transform(value: string): string {
    // return value.replace(/(\d{4})(?!$)/g, '$1 ');
    // const groups = value.match(/\d{4}/g);
    // return groups ? groups.join(' ') : '';

    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');

    // Add a space between every 4 numeric characters
    return numericValue.replace(/(\d{4})(?!$)/g, '$1 ');
  }
}
