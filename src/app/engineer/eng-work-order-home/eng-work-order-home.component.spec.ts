import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkOrderHomeComponent } from './eng-work-order-home.component';

describe('EngWorkOrderHomeComponent', () => {
  let component: EngWorkOrderHomeComponent;
  let fixture: ComponentFixture<EngWorkOrderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkOrderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkOrderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
