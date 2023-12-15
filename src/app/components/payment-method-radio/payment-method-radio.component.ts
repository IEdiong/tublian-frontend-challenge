import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { PaymentMethod } from 'src/types';

@Component({
  selector: 'tbc-payment-method-radio',
  templateUrl: './payment-method-radio.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentMethodRadioComponent),
      multi: true,
    },
  ],
})
export class PaymentMethodRadioComponent
  implements ControlValueAccessor, OnInit
{
  @Input() formControl!: FormControl<PaymentMethod>;
  @Output() selectedValueChange = new EventEmitter<PaymentMethod>();

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  get selectedValue(): PaymentMethod {
    return this.formControl.value;
  }

  onChange(value: PaymentMethod): void {
    this.formControl.setValue(value);
    this.selectedValueChange.emit(value);
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap((value) => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: PaymentMethod): void {
    this.formControl.patchValue(value, { emitEvent: false });
  }
}
