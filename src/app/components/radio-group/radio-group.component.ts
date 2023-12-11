import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { Option, PlatformUsagePlan } from 'src/types';

@Component({
  selector: 'tbc-radio-group',
  templateUrl: './radio-group.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent implements ControlValueAccessor, OnInit {
  @Input({ required: true }) options: Array<Option> = [];
  @Input({ required: true }) name = '';
  @Input() formControl!: FormControl<PlatformUsagePlan>;
  @Output() selectedValueChange = new EventEmitter<PlatformUsagePlan>();

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  get selectedValue(): PlatformUsagePlan {
    return this.formControl.value;
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
  onChange(value: PlatformUsagePlan): void {
    this.formControl.setValue(value);
    this.selectedValueChange.emit(value);
  }

  writeValue(value: PlatformUsagePlan): void {
    this.formControl.patchValue(value, { emitEvent: false });
  }
}
