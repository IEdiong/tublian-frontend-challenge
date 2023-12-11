import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Option, PlatformUsagePlan } from 'src/types';

@Component({
  selector: 'tbc-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.css'],
})
export class AccountSetupComponent {
  @Input() currentStep!: number;
  @Input() options: Option[] = [];
  @Input() radioGroupControl!: FormControl<PlatformUsagePlan>;
  @Output() proceed: EventEmitter<boolean> = new EventEmitter();

  goToNextStep(): void {
    this.proceed.emit(!this.radioGroupControl.invalid);
  }
}
