import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormationComponent } from './search-formation.component';

describe('SearchFormationComponent', () => {
  let component: SearchFormationComponent;
  let fixture: ComponentFixture<SearchFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
