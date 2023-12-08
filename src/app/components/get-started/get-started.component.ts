import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'tbc-get-started',
  templateUrl: './get-started.component.html',
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
      }
    `,
  ],
})
export class GetStartedComponent implements OnInit {
  @Input() currentStep!: number;
  @Input() formGroupName!: string;
  @Output() proceed: EventEmitter<boolean> = new EventEmitter();
  form!: FormGroup;

  get firstName() {
    return this.form.get('firstName') as FormControl<string>;
  }

  get lastName() {
    return this.form.get('lastName') as FormControl<string>;
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  goToNextStep(): void {
    this.proceed.emit(!this.firstName.invalid);
  }
}
