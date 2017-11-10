import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkRequestNewComponent } from './eng-work-request-new.component';

describe('EngWorkRequestNewComponent', () => {
  let component: EngWorkRequestNewComponent;
  let fixture: ComponentFixture<EngWorkRequestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkRequestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkRequestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
