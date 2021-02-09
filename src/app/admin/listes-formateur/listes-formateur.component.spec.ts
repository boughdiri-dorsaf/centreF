import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesFormateurComponent } from './listes-formateur.component';

describe('ListesFormateurComponent', () => {
  let component: ListesFormateurComponent;
  let fixture: ComponentFixture<ListesFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
