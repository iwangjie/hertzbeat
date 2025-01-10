import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VovComponent } from './vov.component';

describe('VovComponent', () => {
  let component: VovComponent;
  let fixture: ComponentFixture<VovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
