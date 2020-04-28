import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFieldsContainerComponent } from './home-fields-container.component';

describe('FieldsComponent', () => {
  let component: HomeFieldsContainerComponent;
  let fixture: ComponentFixture<HomeFieldsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFieldsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFieldsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
