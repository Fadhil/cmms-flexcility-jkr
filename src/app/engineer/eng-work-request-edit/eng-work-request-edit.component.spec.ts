import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWorkRequestEditComponent } from './eng-work-request-edit.component';

describe('EngWorkRequestEditComponent', () => {
  let component: EngWorkRequestEditComponent;
  let fixture: ComponentFixture<EngWorkRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWorkRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWorkRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
