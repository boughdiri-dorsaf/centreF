import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCondidatComponent } from './espace-condidat.component';

describe('EspaceCondidatComponent', () => {
  let component: EspaceCondidatComponent;
  let fixture: ComponentFixture<EspaceCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
