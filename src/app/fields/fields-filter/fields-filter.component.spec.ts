import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsFilterComponent } from './fields-filter.component';

describe('FieldsFilterComponent', () => {
  let component: FieldsFilterComponent;
  let fixture: ComponentFixture<FieldsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
