import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkOrderHomeComponent } from './tech-work-order-home.component';

describe('TechWorkOrderHomeComponent', () => {
  let component: TechWorkOrderHomeComponent;
  let fixture: ComponentFixture<TechWorkOrderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkOrderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkOrderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
