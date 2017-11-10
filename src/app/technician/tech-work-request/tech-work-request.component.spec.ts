import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWorkRequestComponent } from './tech-work-request.component';

describe('TechWorkRequestComponent', () => {
  let component: TechWorkRequestComponent;
  let fixture: ComponentFixture<TechWorkRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWorkRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
