import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraitsComponent } from './admin-traits.component';

describe('AdminTraitsComponent', () => {
  let component: AdminTraitsComponent;
  let fixture: ComponentFixture<AdminTraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
