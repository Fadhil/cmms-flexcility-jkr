import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLayoutComponent } from './tech-layout.component';

describe('TechLayoutComponent', () => {
  let component: TechLayoutComponent;
  let fixture: ComponentFixture<TechLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
