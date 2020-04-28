import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormsContainerComponent } from './home-forms-container.component';

describe('HomeFormsContainerComponent', () => {
  let component: HomeFormsContainerComponent;
  let fixture: ComponentFixture<HomeFormsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFormsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFormsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
