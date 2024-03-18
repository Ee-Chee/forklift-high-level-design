import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframeComponent } from './wireframe.component';

describe('WireframeComponent', () => {
  let component: WireframeComponent;
  let fixture: ComponentFixture<WireframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WireframeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WireframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
