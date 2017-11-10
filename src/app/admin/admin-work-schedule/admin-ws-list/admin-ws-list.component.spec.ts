import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWsListComponent } from './admin-ws-list.component';

describe('AdminWsListComponent', () => {
  let component: AdminWsListComponent;
  let fixture: ComponentFixture<AdminWsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
