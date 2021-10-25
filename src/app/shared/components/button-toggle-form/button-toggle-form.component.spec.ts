import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleFormComponent } from './button-toggle-form.component';

describe('ButtonToggleFormComponent', () => {
  let component: ButtonToggleFormComponent;
  let fixture: ComponentFixture<ButtonToggleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToggleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
