import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  forwardRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, noop, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tbc-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  formControl: FormControl = new FormControl<string>('');

  destroyRef: DestroyRef = inject(DestroyRef);

  onChange: (value: string) => void = noop;
  onTouch: () => void = noop;

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: string): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap((value: string) => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
