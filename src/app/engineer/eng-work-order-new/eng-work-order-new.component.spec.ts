import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkOrderNewComponent } from './eng-work-order-new.component';

describe('EngWorkOrderNewComponent', () => {
  let component: EngWorkOrderNewComponent;
  let fixture: ComponentFixture<EngWorkOrderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkOrderNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkOrderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
