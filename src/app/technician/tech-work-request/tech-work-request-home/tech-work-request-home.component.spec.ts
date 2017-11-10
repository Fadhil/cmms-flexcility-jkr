import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkRequestHomeComponent } from './tech-work-request-home.component';

describe('TechWorkRequestHomeComponent', () => {
  let component: TechWorkRequestHomeComponent;
  let fixture: ComponentFixture<TechWorkRequestHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkRequestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkRequestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
