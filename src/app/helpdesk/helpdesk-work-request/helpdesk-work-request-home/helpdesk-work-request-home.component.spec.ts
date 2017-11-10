import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWorkRequestHomeComponent } from './helpdesk-work-request-home.component';

describe('HelpdeskWorkRequestHomeComponent', () => {
  let component: HelpdeskWorkRequestHomeComponent;
  let fixture: ComponentFixture<HelpdeskWorkRequestHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWorkRequestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWorkRequestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
