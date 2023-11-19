import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterStatsComponent } from './water-stats.component';

describe('WaterStatsComponent', () => {
  let component: WaterStatsComponent;
  let fixture: ComponentFixture<WaterStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterStatsComponent]
    });
    fixture = TestBed.createComponent(WaterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
