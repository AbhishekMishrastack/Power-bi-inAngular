import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRawComponent } from './dashboard-raw.component';

describe('DashboardRawComponent', () => {
  let component: DashboardRawComponent;
  let fixture: ComponentFixture<DashboardRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
