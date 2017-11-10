import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamHomeComponent } from './admin-team-home.component';

describe('AdminTeamHomeComponent', () => {
  let component: AdminTeamHomeComponent;
  let fixture: ComponentFixture<AdminTeamHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeamHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
