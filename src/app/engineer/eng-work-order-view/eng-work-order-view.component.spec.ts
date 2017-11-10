import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkOrderViewComponent } from './eng-work-order-view.component';

describe('EngWorkOrderViewComponent', () => {
  let component: EngWorkOrderViewComponent;
  let fixture: ComponentFixture<EngWorkOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
