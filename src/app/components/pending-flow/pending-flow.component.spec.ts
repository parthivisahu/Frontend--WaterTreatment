import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFlowComponent } from './pending-flow.component';

describe('PendingFlowComponent', () => {
  let component: PendingFlowComponent;
  let fixture: ComponentFixture<PendingFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingFlowComponent]
    });
    fixture = TestBed.createComponent(PendingFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
