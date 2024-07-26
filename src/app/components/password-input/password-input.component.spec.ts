import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputComponent } from './password-input.component';
import { FormControl } from '@angular/forms';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PasswordInputComponent],
    });
    fixture = TestBed.createComponent(PasswordInputComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    component.passwordControl = new FormControl<string>('firstName', {
      nonNullable: true,
    });
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
