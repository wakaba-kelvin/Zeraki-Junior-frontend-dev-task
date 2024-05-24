import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeServiceComponent } from './volume-service.component';

describe('VolumeServiceComponent', () => {
  let component: VolumeServiceComponent;
  let fixture: ComponentFixture<VolumeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumeServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolumeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
