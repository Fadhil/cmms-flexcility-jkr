import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkOrderOngoingCompletionComponent } from './admin-work-order-ongoing-completion.component';

describe('AdminWorkOrderOngoingCompletionComponent', () => {
  let component: AdminWorkOrderOngoingCompletionComponent;
  let fixture: ComponentFixture<AdminWorkOrderOngoingCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkOrderOngoingCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkOrderOngoingCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
