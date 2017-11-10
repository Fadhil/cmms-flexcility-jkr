import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWorkRequestEditComponent } from './helpdesk-work-request-edit.component';

describe('HelpdeskWorkRequestEditComponent', () => {
  let component: HelpdeskWorkRequestEditComponent;
  let fixture: ComponentFixture<HelpdeskWorkRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWorkRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWorkRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
