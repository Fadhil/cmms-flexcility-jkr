import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWrVerifiedEditComponent } from './helpdesk-wr-verified-edit.component';

describe('HelpdeskWrVerifiedEditComponent', () => {
  let component: HelpdeskWrVerifiedEditComponent;
  let fixture: ComponentFixture<HelpdeskWrVerifiedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWrVerifiedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWrVerifiedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
