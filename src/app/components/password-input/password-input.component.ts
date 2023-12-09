import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnInit,
  forwardRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, noop, tap } from 'rxjs';

@Component({
  selector: 'tbc-password-input',
  templateUrl: './password-input.component.html',
  styles: [],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor, OnInit {
  @Input() passwordControl!: FormControl<string>;
  @Input() inputId!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  hasLength = false;
  hasUppercase = false;
  hasSymbol = false;

  get password() {
    return this.passwordControl;
  }
  formControl: FormControl = new FormControl<string>('');

  destroyRef: DestroyRef = inject(DestroyRef);

  onChange: (value: string) => void = noop;
  onTouch: () => void = noop;

  writeValue(value: string): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap((value: string) => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();

    this.passwordControl.valueChanges.subscribe((value: string) => {
      this.hasLength = value.length >= 8;
      this.hasUppercase = /[A-Z]/.test(value);
      this.hasSymbol = /[!@#$%^&*(),.?":{}|<>=;'~`-_+]/.test(value);
      // console.log(this.hasUppercase);
    });
  }
}
