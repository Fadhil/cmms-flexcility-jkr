import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskLayoutComponent } from './helpdesk-layout.component';

describe('HelpdeskLayoutComponent', () => {
  let component: HelpdeskLayoutComponent;
  let fixture: ComponentFixture<HelpdeskLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
