import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWrOpenEditComponent } from './helpdesk-wr-open-edit.component';

describe('HelpdeskWrOpenEditComponent', () => {
  let component: HelpdeskWrOpenEditComponent;
  let fixture: ComponentFixture<HelpdeskWrOpenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskWrOpenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWrOpenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
