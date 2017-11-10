import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWrVerifiedViewComponent } from './helpdesk-wr-verified-view.component';

describe('HelpdeskWrVerifiedViewComponent', () => {
  let component: HelpdeskWrVerifiedViewComponent;
  let fixture: ComponentFixture<HelpdeskWrVerifiedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWrVerifiedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWrVerifiedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
