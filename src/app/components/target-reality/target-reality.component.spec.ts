import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetRealityComponent } from './target-reality.component';

describe('TargetRealityComponent', () => {
  let component: TargetRealityComponent;
  let fixture: ComponentFixture<TargetRealityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetRealityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetRealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
