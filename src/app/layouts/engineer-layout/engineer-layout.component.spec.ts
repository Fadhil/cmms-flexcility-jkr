import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerLayoutComponent } from './engineer-layout.component';

describe('EngineerLayoutComponent', () => {
  let component: EngineerLayoutComponent;
  let fixture: ComponentFixture<EngineerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
