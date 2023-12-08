import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  form!: FormGroup;

  get firstName() {
    return this.form.get(['name', 'firstName']);
  }

  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  goToNextStep(): void {
    return;
  }
}
