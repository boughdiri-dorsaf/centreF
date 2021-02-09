import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectFormateurComponent } from './connect-formateur.component';

describe('ConnectFormateurComponent', () => {
  let component: ConnectFormateurComponent;
  let fixture: ComponentFixture<ConnectFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
