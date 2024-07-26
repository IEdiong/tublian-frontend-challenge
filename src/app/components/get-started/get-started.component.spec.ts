import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedComponent } from './get-started.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GetStartedComponent', () => {
  let component: GetStartedComponent;
  let fixture: ComponentFixture<GetStartedComponent>;
  let mockRootFormGroup: any;

  beforeEach(() => {
    const mockControl = {
      get: jasmine.createSpy('get').and.returnValue(new FormGroup({})),
    };

    mockRootFormGroup = jasmine.createSpyObj('FormGroupDirective', [], {
      control: mockControl,
    });
    TestBed.configureTestingModule({
      declarations: [GetStartedComponent],
      providers: [{ provide: FormGroupDirective, useValue: mockRootFormGroup }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(GetStartedComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should initialize form from rootFormGroup', () => {
    component = fixture.componentInstance;
    component.formGroupName = 'testFormGroup';
    fixture.detectChanges();

    expect(mockRootFormGroup.control.get).toHaveBeenCalledWith('testFormGroup');
    expect(component.form).toBeTruthy();
  });
});
