import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAdminComponent } from './connect-admin.component';

describe('ConnectAdminComponent', () => {
  let component: ConnectAdminComponent;
  let fixture: ComponentFixture<ConnectAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
