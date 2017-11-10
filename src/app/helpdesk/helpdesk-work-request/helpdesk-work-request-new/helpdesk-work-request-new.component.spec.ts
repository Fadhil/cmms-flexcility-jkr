import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWorkRequestNewComponent } from './helpdesk-work-request-new.component';

describe('HelpdeskWorkRequestNewComponent', () => {
  let component: HelpdeskWorkRequestNewComponent;
  let fixture: ComponentFixture<HelpdeskWorkRequestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWorkRequestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWorkRequestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
