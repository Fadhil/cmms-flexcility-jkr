import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkRequestHomeComponent } from './eng-work-request-home.component';

describe('EngWorkRequestHomeComponent', () => {
  let component: EngWorkRequestHomeComponent;
  let fixture: ComponentFixture<EngWorkRequestHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkRequestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkRequestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
