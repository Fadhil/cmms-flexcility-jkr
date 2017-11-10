import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkOrderEditComponent } from './eng-work-order-edit.component';

describe('EngWorkOrderEditComponent', () => {
  let component: EngWorkOrderEditComponent;
  let fixture: ComponentFixture<EngWorkOrderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkOrderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
