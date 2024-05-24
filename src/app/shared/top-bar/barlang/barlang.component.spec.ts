import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarlangComponent } from './barlang.component';

describe('BarlangComponent', () => {
  let component: BarlangComponent;
  let fixture: ComponentFixture<BarlangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarlangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarlangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
