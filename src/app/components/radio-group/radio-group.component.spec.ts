import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupComponent } from './radio-group.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformUsagePlan } from 'src/types';

describe('RadioGroupComponent', () => {
  let component: RadioGroupComponent;
  let fixture: ComponentFixture<RadioGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioGroupComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(RadioGroupComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    component.options = [
      {
        label: 'label',
        value: 'team',
        imagePath: '../../assets/team.png',
        description: 'description',
      },
    ];
    component.name = 'testRadioGroup';
    component.formControl = new FormControl<PlatformUsagePlan>('team', {
      nonNullable: true,
    });

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
