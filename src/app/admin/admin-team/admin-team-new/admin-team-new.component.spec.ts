import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamNewComponent } from './admin-team-new.component';

describe('AdminTeamNewComponent', () => {
  let component: AdminTeamNewComponent;
  let fixture: ComponentFixture<AdminTeamNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeamNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeamNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
