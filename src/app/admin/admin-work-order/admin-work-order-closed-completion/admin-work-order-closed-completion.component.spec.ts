import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderClosedCompletionComponent } from './admin-work-order-closed-completion.component';

describe('AdminWorkOrderClosedCompletionComponent', () => {
  let component: AdminWorkOrderClosedCompletionComponent;
  let fixture: ComponentFixture<AdminWorkOrderClosedCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderClosedCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderClosedCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
