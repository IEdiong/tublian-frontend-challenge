import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModalComponent } from './payment-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PaymentModalComponent', () => {
  let component: PaymentModalComponent;
  let fixture: ComponentFixture<PaymentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
