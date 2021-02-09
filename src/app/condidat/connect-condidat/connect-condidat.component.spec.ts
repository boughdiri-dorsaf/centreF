import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectCondidatComponent } from './connect-condidat.component';

describe('ConnectCondidatComponent', () => {
  let component: ConnectCondidatComponent;
  let fixture: ComponentFixture<ConnectCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
