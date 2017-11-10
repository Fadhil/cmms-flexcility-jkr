import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkOrderViewComponent } from './tech-work-order-view.component';

describe('TechWorkOrderViewComponent', () => {
  let component: TechWorkOrderViewComponent;
  let fixture: ComponentFixture<TechWorkOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
