import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';
import { FormControl } from '@angular/forms';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextInputComponent],
    });
    fixture = TestBed.createComponent(TextInputComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    component.textControl = new FormControl('firstName', { nonNullable: true });
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
