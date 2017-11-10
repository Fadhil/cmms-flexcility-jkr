import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkOrderCompletionComponent } from './tech-work-order-completion.component';

describe('TechWorkOrderCompletionComponent', () => {
  let component: TechWorkOrderCompletionComponent;
  let fixture: ComponentFixture<TechWorkOrderCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkOrderCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkOrderCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
