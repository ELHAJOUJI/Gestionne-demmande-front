import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDemmandeComponent } from './display-demmande.component';

describe('DisplayDemmandeComponent', () => {
  let component: DisplayDemmandeComponent;
  let fixture: ComponentFixture<DisplayDemmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDemmandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDemmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
