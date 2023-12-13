import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
  forwardRef,
  inject,
} from '@angular/core';
import { NgClass } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, noop, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PaymentInterval } from 'src/types';

@Component({
  selector: 'tbc-plan-interval',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './plan-interval.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlanIntervalComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanIntervalComponent implements ControlValueAccessor, OnInit {
  @Input({ required: true }) options: Array<PaymentInterval> = [];
  @Input() planIntervalControl!: FormControl;

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  onChange: (value: unknown) => void = noop;
  onTouch: () => void = noop;

  ngOnInit(): void {
    this.planIntervalControl.valueChanges
      .pipe(
        debounceTime(200),
        tap((value) => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  writeValue(value: PaymentInterval): void {
    this.planIntervalControl.patchValue({ value }, { emitEvent: false });
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.planIntervalControl.disable()
      : this.planIntervalControl.enable();
  }
}
