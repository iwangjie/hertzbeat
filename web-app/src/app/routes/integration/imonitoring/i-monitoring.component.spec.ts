import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMonitoringComponent } from './i-monitoring.component';

describe('IMonitoringComponent', () => {
  let component: IMonitoringComponent;
  let fixture: ComponentFixture<IMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
