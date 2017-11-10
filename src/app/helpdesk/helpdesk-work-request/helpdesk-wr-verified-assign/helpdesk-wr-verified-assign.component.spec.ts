import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWrVerifiedAssignComponent } from './helpdesk-wr-verified-assign.component';

describe('HelpdeskWrVerifiedAssignComponent', () => {
  let component: HelpdeskWrVerifiedAssignComponent;
  let fixture: ComponentFixture<HelpdeskWrVerifiedAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWrVerifiedAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWrVerifiedAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
