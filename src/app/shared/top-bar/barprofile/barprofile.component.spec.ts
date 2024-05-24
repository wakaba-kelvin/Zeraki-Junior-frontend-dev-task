import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarprofileComponent } from './barprofile.component';

describe('BarprofileComponent', () => {
  let component: BarprofileComponent;
  let fixture: ComponentFixture<BarprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
