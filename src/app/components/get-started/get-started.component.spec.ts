import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedComponent } from './get-started.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GetStartedComponent', () => {
  let component: GetStartedComponent;
  let fixture: ComponentFixture<GetStartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetStartedComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(GetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
