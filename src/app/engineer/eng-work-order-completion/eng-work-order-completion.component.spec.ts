import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkOrderCompletionComponent } from './eng-work-order-completion.component';

describe('EngWorkOrderCompletionComponent', () => {
  let component: EngWorkOrderCompletionComponent;
  let fixture: ComponentFixture<EngWorkOrderCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkOrderCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkOrderCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
