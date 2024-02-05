import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'tbc-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  @Input() currentStep!: number;
  @Input() formGroupName!: string;
  @Input() userName!: string;
  @Output() proceed: EventEmitter<boolean> = new EventEmitter();
  form!: FormGroup;
  hasUppercaseCharacter = false;

  get email() {
    return this.form.get('email') as FormControl<string>;
  }

  get password() {
    return this.form.get('password') as FormControl<string>;
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  goToNextStep(): void {
    // Check form validity before continuing
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.proceed.emit(!this.form.invalid);
    }
  }
}
