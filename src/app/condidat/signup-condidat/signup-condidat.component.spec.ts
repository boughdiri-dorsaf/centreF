import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCondidatComponent } from './signup-condidat.component';

describe('SignupCondidatComponent', () => {
  let component: SignupCondidatComponent;
  let fixture: ComponentFixture<SignupCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
