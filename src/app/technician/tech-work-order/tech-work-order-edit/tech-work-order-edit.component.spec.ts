import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkOrderEditComponent } from './tech-work-order-edit.component';

describe('TechWorkOrderEditComponent', () => {
  let component: TechWorkOrderEditComponent;
  let fixture: ComponentFixture<TechWorkOrderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkOrderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
