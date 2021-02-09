import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormateurComponent } from './session-formateur.component';

describe('SessionFormateurComponent', () => {
  let component: SessionFormateurComponent;
  let fixture: ComponentFixture<SessionFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
