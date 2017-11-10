import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkRequestEditComponent } from './tech-work-request-edit.component';

describe('TechWorkRequestEditComponent', () => {
  let component: TechWorkRequestEditComponent;
  let fixture: ComponentFixture<TechWorkRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
